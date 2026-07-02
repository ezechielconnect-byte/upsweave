import React, { useEffect, useRef } from "react";
import { Target } from "lucide-react";
import createGlobe from "cobe";
import { useTranslation } from "react-i18next";

export const GlobeSection: React.FC = () => {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let animationFrameId: number;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200,
      height: 1200,
      phi: 0,
      theta: 0.1,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.14, 0.38, 0.97], // Blue markers
      glowColor: [0.9, 0.9, 0.9],
      markers: [
        { location: [5.36, -4.01], size: 0.08 }, // Abidjan (Côte d'Ivoire)
      ],
    });

    const animate = () => {
      phi += 0.004; // Restored continuous rotation
      globe.update({ phi });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
    };
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20 mb-16 mt-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text / Vision side (Left) */}
        <div className="flex flex-col items-start text-left z-20 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-6 border border-blue-100/50 shadow-sm">
            <Target className="w-4 h-4" />
            {t("Objectif 2030")}
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            {t("Devenir le leader mondial de la mise en relation de services.")}
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            {t(
              "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.",
            )}
          </p>
        </div>

        {/* Globe side (Right) */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center order-1 lg:order-2 mt-4 lg:mt-0">
          {/* Globe Canvas Container */}
          <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
            <canvas
              ref={canvasRef}
              style={{ aspectRatio: "1/1" }}
              className="w-[280px] sm:w-[380px] md:w-[600px] opacity-90 transition-opacity duration-500"
            />
          </div>

          {/* Floating Card: Notre QG */}
          <div className="absolute top-0 md:top-[10%] lg:top-[20%] left-0 sm:left-4 lg:-left-12 z-20 scale-90 sm:scale-100 origin-top-left">
            <div className="flex items-center gap-4 px-4 py-2.5 md:px-5 md:py-3 rounded-2xl md:rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl shadow-blue-500/10 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-blue-600 relative z-10 shadow-[0_0_10px_#2563eb]" />
                  <div
                    className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/30 animate-ping"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-extrabold text-sm md:text-base leading-tight whitespace-nowrap">
                  {t("Notre QG")}
                </span>
                <span className="text-blue-600 text-[10px] md:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                  {t("Côte d'Ivoire")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
