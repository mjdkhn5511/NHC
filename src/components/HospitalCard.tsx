import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import type { HospitalItem } from "../data/hospitalsData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedHospital, getLocalizedHospitalName, SPECIALTY_TRANSLATIONS } from "../utils/localizedData";
import { Image } from "./Image";

interface HospitalCardProps {
  hospital: HospitalItem;
  onRequestAssistance: (hospitalName: string) => void;
  priority?: boolean;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital, onRequestAssistance, priority = false }) => {
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();
  const localizedHospital = getLocalizedHospital(hospital, currentLang);

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-teal-400/60 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Hospital Image */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 aspect-[16/9]">
        <Image
          src={hospital.image}
          alt={hospital.name}
          width={600}
          height={338}
          priority={priority}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/9]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#08221E]/90 backdrop-blur-md text-teal-300 border border-teal-500/30">
            {localizedHospital.city}
          </span>
          {hospital.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-teal-600 text-white shadow-xs">
              {t("common.featuredHub", "Featured Hub")}
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1 font-medium text-slate-200">
            <Building2 className="w-3.5 h-3.5 text-teal-400" />
            {localizedHospital.bedCapacity}
          </span>
          <span className="text-[11px] text-teal-200 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
            {localizedHospital.distanceFromAirport.includes("from")
              ? localizedHospital.distanceFromAirport.split("from")[0]
              : localizedHospital.distanceFromAirport}
          </span>
        </div>
      </div>

      {/* Hospital Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Accreditation Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {hospital.accreditation.slice(0, 2).map((acc, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md"
              >
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                {acc}
              </span>
            ))}
          </div>

          <Link to={localizeUrl(`/hospitals/${hospital.slug}`)}>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-1">
              {getLocalizedHospitalName(hospital.name, currentLang)}
            </h3>
          </Link>

          <p className="mt-1 text-xs text-slate-500 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{hospital.locationDetail}</span>
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {localizedHospital.shortDesc}
          </p>

          {/* Specialties preview pills */}
          <div className="mt-3 flex flex-wrap gap-1">
            {hospital.specialties.slice(0, 3).map((spec, i) => {
              const translatedSpec = SPECIALTY_TRANSLATIONS[spec]?.[currentLang] || spec;
              return (
                <span
                  key={i}
                  className="text-[10.5px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                >
                  {translatedSpec.split(" ")[0]} {translatedSpec.split(" ")[1] || ""}
                </span>
              );
            })}
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={localizeUrl(`/hospitals/${hospital.slug}`)}
            className="flex-1 text-center py-2.5 px-3 rounded-xl border border-slate-300 hover:border-teal-500 text-xs font-bold text-slate-700 hover:text-teal-700 transition-colors"
          >
            {t("common.viewHospital", "View Hospital")}
          </Link>
          <button
            onClick={() => onRequestAssistance(hospital.name)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold shadow-sm shadow-teal-600/20 transition-all cursor-pointer"
          >
            <span>{t("common.requestCare", "Request Care")}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
