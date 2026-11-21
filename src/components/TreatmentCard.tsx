import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Activity } from "lucide-react";
import type { TreatmentItem } from "../data/treatmentsData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedTreatment } from "../utils/localizedData";
import { Image } from "./Image";

interface TreatmentCardProps {
  treatment: TreatmentItem;
  onConsult?: (treatmentTitle: string) => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, onConsult }) => {
  const { currentLang, t, localizeUrl } = useLanguage();
  const localizedTreatment = getLocalizedTreatment(treatment, currentLang);

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-teal-400/60 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image Thumbnail with Overlay Tag */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100 aspect-[16/10]">
        <Image
          src={treatment.image}
          alt={treatment.title}
          width={400}
          height={250}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/10]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-[#08221E]/90 backdrop-blur-md text-teal-300 border border-teal-500/30 flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-teal-400" />
          {localizedTreatment.badge}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <Link to={localizeUrl(`/treatments/${treatment.slug}`)}>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-1">
              {localizedTreatment.title}
            </h3>
          </Link>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {localizedTreatment.shortDesc}
          </p>

          <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
            <span className="font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
              {t("common.stay", "Stay:")} {localizedTreatment.recommendedStay}
            </span>
            <span>{t("common.verifiedJci", "• Verified JCI Centers")}</span>
          </div>
        </div>

        {/* Action Row just below the card content */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={localizeUrl(`/treatments/${treatment.slug}`)}
            className="flex-1 text-center py-2.5 px-3 rounded-xl border border-slate-300 hover:border-teal-500 text-xs font-bold text-slate-700 hover:text-teal-700 transition-colors"
          >
            {t("common.exploreDetails", "Explore Details")}
          </Link>

          {onConsult && (
            <button
              onClick={() => onConsult(treatment.title)}
              className="flex-1 inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs shadow-sm shadow-teal-600/20 transition-all cursor-pointer"
            >
              <span>{t("common.getEstimate", "Get Estimate")}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
