import { Star } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-medium tracking-widest uppercase text-sm mb-3">
            Client Love
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteData.testimonials.map((t) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-8 hover:neon-border transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400"
                    fill="#facc15"
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-400">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
