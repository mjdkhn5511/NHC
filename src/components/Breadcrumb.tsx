import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { t, localizeUrl, isRTL } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs md:text-sm text-slate-300">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link
            to={localizeUrl("/")}
            className="flex items-center gap-1 text-slate-300 hover:text-teal-300 transition-colors font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t("common.home", "Home")}</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li>
                <ChevronRight className={`w-3.5 h-3.5 text-slate-400 ${isRTL ? "rotate-180" : ""}`} aria-hidden="true" />
              </li>
              <li>
                {isLast || !item.href ? (
                  <span className="font-semibold text-white" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={localizeUrl(item.href)}
                    className="hover:text-teal-300 transition-colors font-medium text-slate-300"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
