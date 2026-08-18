import { ChevronDown, Play } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/15 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <p className="text-orange-300 font-medium tracking-widest uppercase text-xs sm:text-sm">
            {siteData.tagline}
          </p>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          {hero.headline}{" "}
          <span className="gradient-text">{hero.headlineAccent}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
          {hero.description}
        </p>
        <p className="text-sm text-gray-400 mb-10">{siteData.location}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#book"
            className="px-8 py-4 rounded-full btn-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#nights"
            className="px-8 py-4 rounded-full border border-orange-500/30 text-white font-semibold text-lg hover:bg-orange-500/10 transition-colors flex items-center justify-center gap-2"
          >
            <Play size={20} />
            Explore Nights
          </a>
        </div>

        {/* Quick night theme pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {siteData.nightThemes.map((theme) => (
            <a
              key={theme.id}
              href="#nights"
              className={`px-4 py-2 rounded-full text-xs font-semibold glass hover:${theme.borderClass} transition-all ${theme.gradientClass}`}
            >
              {theme.title}
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-orange-400 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
