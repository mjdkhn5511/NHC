import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean;
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Global Optimized Image Component
 * - If priority is true (Hero/First Banner): enforces loading="eager", fetchPriority="high", decoding="sync".
 * - Default: strictly enforces loading="lazy", fetchPriority="low", decoding="async".
 * - Enforces explicit width & height attributes and CSS aspect-ratio to prevent layout shift (CLS) & DevTools warnings.
 */
export const Image: React.FC<ImageProps> = ({
  priority = false,
  loading,
  decoding,
  fetchPriority,
  className = "",
  width,
  height,
  style,
  ...props
}) => {
  const w = width ?? 400;
  const h = height ?? 300;

  const computedStyle: React.CSSProperties = {
    aspectRatio: `${w} / ${h}`,
    ...style,
  };

  return (
    <img
      loading={priority ? "eager" : "lazy"}
      decoding={decoding || (priority ? "sync" : "async")}
      fetchPriority={priority ? "high" : "low"}
      width={w}
      height={h}
      style={computedStyle}
      className={className}
      {...props}
    />
  );
};

export default Image;
