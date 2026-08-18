import { MapPin, Users } from "lucide-react";
import { siteData } from "../data/siteData";
import SafeImage from "./SafeImage";

const typeColors = {
  Bollywood: "bg-red-500/20 text-red-400 border-red-500/30",
  Tollywood: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Hollywood: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export default function PastEvents() {
  return (
    <section id="events" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-medium tracking-widest uppercase text-sm mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Past <span className="gradient-text">Events</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bollywood nights, Tollywood galas, and Desi celebrations across America
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.pastEvents.map((event, i) => (
            <div
              key={event.name}
              className="glass rounded-2xl overflow-hidden hover:neon-border transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackIndex={i}
                  showIcon={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${typeColors[event.type] || typeColors.Bollywood}`}
                  >
                    {event.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-lg font-semibold">
                    {event.name}
                  </h3>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {event.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14} />
                  {event.attendees}
                </span>
              </div>
              <div className="px-5 pb-5">
                <span className="text-xs text-orange-400 font-medium">
                  {event.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
