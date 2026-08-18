import { useState } from "react";
import { Music, Sparkles } from "lucide-react";
import { siteData } from "../data/siteData";
import SafeImage from "./SafeImage";

export default function NightThemes() {
  const [active, setActive] = useState(0);
  const theme = siteData.nightThemes[active];

  return (
    <section id="nights" className="py-24 px-6 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-medium tracking-widest uppercase text-sm mb-3">
            Signature Experiences
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Night</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three distinct vibes — one DJ who knows them all. Pick the theme
            that fits your crowd.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {siteData.nightThemes.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                active === i
                  ? `bg-gradient-to-r ${t.accentColor} text-white shadow-lg`
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        <div className={`glass rounded-3xl overflow-hidden ${theme.borderClass} transition-all duration-500`}>
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto min-h-[320px]">
              <SafeImage
                src={theme.image}
                alt={theme.title}
                className="w-full h-full object-cover absolute inset-0"
                fallbackIndex={active}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d14]/80 hidden lg:block pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] to-transparent lg:hidden pointer-events-none" />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-sm text-orange-400 font-medium tracking-wider uppercase mb-2">
                {theme.tagline}
              </p>
              <h3 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${theme.gradientClass}`}>
                {theme.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {theme.description}
              </p>

              <ul className="space-y-3 mb-8">
                {theme.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-gray-300">
                    <Sparkles size={16} className="text-orange-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${theme.accentColor} text-white font-semibold hover:opacity-90 transition-opacity w-fit`}
              >
                <Music size={20} />
                Book {theme.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
