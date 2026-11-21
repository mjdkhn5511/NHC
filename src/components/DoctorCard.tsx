import React from "react";
import { Link } from "react-router-dom";
import { Award, Briefcase, Building, ArrowRight } from "lucide-react";
import type { DoctorItem } from "../data/doctorsData";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedDoctor, getLocalizedHospitalName } from "../utils/localizedData";
import { Image } from "./Image";

interface DoctorCardProps {
  doctor: DoctorItem;
  onRequestConsultation: (doctorName: string) => void;
  priority?: boolean;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onRequestConsultation, priority = false }) => {
  const { currentLang, t, localizeUrl, isRTL } = useLanguage();
  const localizedDoctor = getLocalizedDoctor(doctor, currentLang);

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-teal-400/60 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Doctor Photo & Badges */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100 aspect-[5/6]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={480}
          priority={priority}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 aspect-[5/6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#08221E]/90 backdrop-blur-md text-teal-300 border border-teal-500/30">
            {localizedDoctor.city}
          </span>
          {doctor.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-teal-600 text-white shadow-xs">
              {t("common.renownedLeader", "Renowned Leader")}
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-300 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{localizedDoctor.experienceFormatted}</span>
          </span>
        </div>
      </div>

      {/* Doctor Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
            {localizedDoctor.specialty}
          </span>

          <Link to={localizeUrl(`/doctors/${doctor.slug}`)}>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors mt-0.5 line-clamp-1">
              {doctor.name}
            </h3>
          </Link>

          <p className="text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
            {localizedDoctor.designation}
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100">
            <Building className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">{getLocalizedHospitalName(doctor.hospitalName, currentLang)}</span>
          </div>

          <div className="mt-2.5 flex items-start gap-1.5 text-[11px] text-slate-500">
            <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
            <span className="line-clamp-1">{doctor.qualifications}</span>
          </div>

          <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {localizedDoctor.bio}
          </p>
        </div>

        {/* Action Row */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={localizeUrl(`/doctors/${doctor.slug}`)}
            className="flex-1 text-center py-2.5 px-3 rounded-xl border border-slate-300 hover:border-teal-500 text-xs font-bold text-slate-700 hover:text-teal-700 transition-colors"
          >
            {t("common.viewProfile", "View Profile")}
          </Link>
          <button
            onClick={() => onRequestConsultation(doctor.name)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold shadow-sm shadow-teal-600/20 transition-all cursor-pointer"
          >
            <span>{t("common.consultDoctor", "Consult Doctor")}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
