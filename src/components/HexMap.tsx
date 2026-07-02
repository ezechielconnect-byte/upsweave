import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function HexMap() {
  return (
    <div className="w-full h-full relative">
      <ComposableMap projection="geoMercator">
        <defs>
          <pattern
            id="hex"
            width="14"
            height="24.2486"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.5)"
          >
            <path
              d="M7 0 L14 4.0414 L14 12.1243 L7 16.1657 L0 12.1243 L0 4.0414 Z"
              fill="rgba(255, 255, 255, 0.25)"
            />
            <path
              d="M7 24.2486 L14 20.2072 L14 12.1243 L7 16.1657 L0 12.1243 L0 20.2072 Z"
              fill="rgba(255, 255, 255, 0.25)"
            />
          </pattern>
        </defs>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#hex)"
                stroke="none"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
