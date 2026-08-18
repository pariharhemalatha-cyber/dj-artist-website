import { useState } from "react";
import { Play, Headphones } from "lucide-react";
import { siteData } from "../data/siteData";
import SafeImage from "./SafeImage";

export default function Mixes() {
  const [activeMix, setActiveMix] = useState(null);

  return (
    <section id="mixes" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-medium tracking-widest uppercase text-sm mb-3">
            Sound Check
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Listen to My <span className="gradient-text">Mixes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sample my style across different genres and event types
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteData.mixes.map((mix, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden hover:neon-border transition-all duration-300 group"
            >
              <div className="flex">
                <div className="relative w-32 sm:w-40 shrink-0">
                  <SafeImage
                    src={mix.coverImage}
                    alt={mix.title}
                    className="w-full h-full min-h-[120px] object-cover"
                    fallbackIndex={i}
                    showIcon={false}
                  />
                  <button
                    onClick={() => setActiveMix(activeMix === i ? null : i)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Play ${mix.title}`}
                  >
                    <Play size={32} className="text-white" fill="white" />
                  </button>
                </div>
                <div className="p-5 flex flex-col justify-center flex-1">
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {mix.title}
                  </h3>
                  <p className="text-sm text-orange-400 mb-2">{mix.genre}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Headphones size={14} />
                      {mix.plays} plays
                    </span>
                    <span>{mix.duration}</span>
                  </div>
                </div>
              </div>

              {activeMix === i && (
                <div className="p-4 border-t border-white/5">
                  <iframe
                    width="100%"
                    height="120"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={mix.embedUrl}
                    title={mix.title}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
