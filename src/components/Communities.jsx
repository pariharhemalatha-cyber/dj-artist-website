import { MapPin } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Communities() {
  const { communities } = siteData;
  const doubled = [...communities.cities, ...communities.cities];

  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <MapPin size={18} className="text-orange-400" />
          <p className="text-orange-400 font-medium tracking-widest uppercase text-sm">
            Nationwide Coverage
          </p>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
          {communities.title}
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">{communities.description}</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((city, i) => (
            <span
              key={`${city}-${i}`}
              className="inline-flex items-center mx-4 px-6 py-3 rounded-full glass text-gray-300 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 mr-3 shrink-0" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
