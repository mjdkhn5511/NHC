import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { stripLangPrefix } from "../config/languages";
import { useLanguage } from "../context/LanguageContext";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  schemaData?: object;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  schemaData,
  ogImage
}) => {
  const { currentLang } = useLanguage();
  const location = useLocation();

  const domain = "https://www.nadwahealthcare.com";

  // Normalize current path from react-router: remove trailing slash unless it's root
  const currentPath = location.pathname.length > 1 && location.pathname.endsWith('/')
    ? location.pathname.slice(0, -1)
    : location.pathname;

  // The canonical URL for the active page is ALWAYS its own localized path!
  const finalCanonicalUrl = (() => {
    if (canonicalUrl) {
      try {
        const parsed = new URL(canonicalUrl);
        if (currentLang !== "en" && !parsed.pathname.startsWith(`/${currentLang}`)) {
          parsed.pathname = `/${currentLang}${parsed.pathname === "/" ? "" : parsed.pathname}`;
        }
        return parsed.toString();
      } catch {
        // Fallback to current route
      }
    }
    return `${domain}${currentPath === '/' ? '/' : currentPath}`;
  })();

  useEffect(() => {
    // Front-loaded title for optimal Google SEO ranking
    const finalTitle = title.includes("Nadwa Healthcare") || title.includes("NadwaHealthcare")
      ? title
      : `${title} | Nadwa Healthcare`;
    document.title = finalTitle;

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrVal: string, contentVal: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", contentVal);
    };

    // Update Meta Description
    setMetaTag('meta[name="description"]', "name", "description", description);

    // Update Open Graph tags
    setMetaTag('meta[property="og:title"]', "property", "og:title", finalTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", finalCanonicalUrl);
    if (ogImage) {
      setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);
      setMetaTag('meta[property="og:image:secure_url"]', "property", "og:image:secure_url", ogImage);
      const imgType = ogImage.endsWith(".webp") ? "image/webp" : ogImage.endsWith(".png") ? "image/png" : "image/jpeg";
      setMetaTag('meta[property="og:image:type"]', "property", "og:image:type", imgType);
    }

    // Update Twitter Card tags
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", finalTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    if (ogImage) {
      setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    }

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", finalCanonicalUrl);

    // Hreflang alternates for International Google SEO
    try {
      const urlObj = new URL(finalCanonicalUrl);
      const cleanPath = stripLangPrefix(urlObj.pathname);
      const domain = "https://www.nadwahealthcare.com";
      const normalizedPath = cleanPath === '/' ? '' : cleanPath;

      const hreflangConfigs = [
        { lang: 'en', href: `${domain}${normalizedPath || '/'}` },
        { lang: 'ar', href: `${domain}/ar${normalizedPath}` },
        { lang: 'fr', href: `${domain}/fr${normalizedPath}` },
        { lang: 'ru', href: `${domain}/ru${normalizedPath}` },
        { lang: 'x-default', href: `${domain}${normalizedPath || '/'}` },
      ];

      hreflangConfigs.forEach(({ lang, href }) => {
        let hlTag = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
        if (!hlTag) {
          hlTag = document.createElement("link");
          hlTag.setAttribute("rel", "alternate");
          hlTag.setAttribute("hreflang", lang);
          document.head.appendChild(hlTag);
        }
        hlTag.setAttribute("href", href);
      });
    } catch {
      // Ignore if canonicalUrl is not a full URL
    }

    // Inject dynamic schema if provided
    let scriptTag = document.getElementById("page-dynamic-schema") as HTMLScriptElement | null;
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.type = "application/ld+json";
        scriptTag.id = "page-dynamic-schema";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schemaData);
    }

    return () => {
      const existingScript = document.getElementById("page-dynamic-schema");
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, [title, description, finalCanonicalUrl, schemaData, ogImage, location.pathname, currentLang]);

  return null;
};
