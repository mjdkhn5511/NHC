import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  iconOnly?: boolean;
}

/**
 * Clean vector SVG representation of the official NHC medical emblem:
 * Stylized "N" with the medical "+" cross above the right stem.
 */
export const NhcEmblem: React.FC<{ className?: string }> = ({
  className = "w-10 h-10"
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Medical Plus (+) Sign directly above the right stem */}
      <rect x="68" y="4" width="14" height="34" rx="6" fill="currentColor" />
      <rect x="56" y="14" width="38" height="14" rx="6" fill="currentColor" />

      {/* Stylized N Monogram Path */}
      <path
        d="M 18 94 L 18 28 C 18 12, 32 10, 43 24 L 62 66 C 70 82, 75 80, 75 66 L 75 52"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "light",
  className = "",
  iconOnly = false
}) => {
  const isLight = variant === "light";
  const { localizeUrl } = useLanguage();

  return (
    <Link
      to={localizeUrl("/")}
      className={`inline-flex items-center gap-2 sm:gap-3 shrink-0 group transition-transform duration-200 hover:scale-[1.02] focus:outline-none ${className}`}
      aria-label="Nadwa Healthcare (NHC) Home"
    >
      {/* Pure SVG Brand Emblem (No white card / no raster image) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <NhcEmblem
          className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-105 ${
            isLight ? "text-teal-400 drop-shadow-[0_2px_8px_rgba(45,212,191,0.35)]" : "text-[#3E808D]"
          }`}
        />
      </div>

      {!iconOnly && (
        <div className="flex items-center gap-1.5 sm:gap-2 leading-none shrink-0">
          <span
            className={`text-sm sm:text-base lg:text-xl font-extrabold tracking-tight whitespace-nowrap ${
              isLight ? "text-white" : "text-[#1E4660]"
            }`}
          >
            Nadwa <span className={isLight ? "text-teal-400" : "text-[#3E808D]"}>Healthcare</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30 tracking-wider">
            NHC
          </span>
        </div>
      )}
    </Link>
  );
};
