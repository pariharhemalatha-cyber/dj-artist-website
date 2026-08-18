import { PartyPopper, Heart, Building2, Music2, Film, Clapperboard } from "lucide-react";
import { siteData } from "../data/siteData";

const iconMap = {
  party: PartyPopper,
  wedding: Heart,
  corporate: Building2,
  festival: Music2,
  bollywood: Film,
  tollywood: Clapperboard,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-medium tracking-widest uppercase text-sm mb-3">
            For Event Organizers & Families
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Desi Event <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From Bollywood sangeets to Tollywood galas — professional DJ services
            tailored for Indian communities in America
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service) => {
            const Icon = iconMap[service.icon] || Music2;
            return (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 hover:neon-border transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/10 flex items-center justify-center mb-6 group-hover:from-orange-500/30 group-hover:to-yellow-500/20 transition-colors">
                  <Icon size={28} className="text-orange-400" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-orange-400 font-semibold">
                  Starting at {service.startingPrice}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
