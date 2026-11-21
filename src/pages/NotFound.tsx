import React from "react";
import { Link } from "react-router-dom";
import { Home, Hospital, Stethoscope } from "lucide-react";
import { SEOHead } from "../components/SEOHead";

export const NotFound: React.FC = () => {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-20 px-4">
      <SEOHead
        title="Page Not Found (404) | NadwaHealthcare"
        description="The requested page could not be found. Navigate back to NadwaHealthcare home or explore our hospital and doctor directories."
      />

      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto text-3xl font-black border border-teal-200">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The page you are looking for may have been relocated, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-3 pt-2 text-left">
          <Link
            to="/hospitals"
            className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 transition-colors flex items-center gap-2 text-xs font-semibold text-slate-800"
          >
            <Hospital className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Hospitals in Delhi NCR</span>
          </Link>
          <Link
            to="/doctors"
            className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 transition-colors flex items-center gap-2 text-xs font-semibold text-slate-800"
          >
            <Stethoscope className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Specialist Doctors</span>
          </Link>
        </div>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
