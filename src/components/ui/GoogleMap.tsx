import React from "react";
import { studioConfig } from "@/data/config";
import { MapPin } from "lucide-react";

export const GoogleMap: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[460px] overflow-hidden border border-studio-charcoal/10 glass-card">
      <iframe
        src={studioConfig.googleMapsEmbedUrl}
        title={`${studioConfig.name} Studio Location`}
        className="w-full h-full grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      {/* Floating Address Badge */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs glass-card p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-studio-bronze/15 text-studio-bronzeDark">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest font-semibold text-studio-charcoal">
              {studioConfig.name} Studio
            </span>
            <p className="mt-1 text-xs text-studio-stone leading-relaxed">
              {studioConfig.address.full}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
