import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function GlobeComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    if (!canvasRef.current) return;

    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 3,
      baseColor: [0.1, 0.1, 0.1], // dark grey/black
      markerColor: [0.1, 0.5, 1], // blue for markers
      glowColor: [0.4, 0.2, 0.8], // purplish glow
      markers: [
        // Dummy markers
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [51.5072, -0.1276], size: 0.04 },
        { location: [35.6895, 139.6917], size: 0.05 },
        { location: [48.8566, 2.3522], size: 0.03 },
      ],
      // @ts-expect-error onRender is used by cobe internally
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-[100%] aspect-square max-w-[600px] m-auto relative">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          cursor: "auto",
          userSelect: "none",
        }}
      />
    </div>
  );
}
