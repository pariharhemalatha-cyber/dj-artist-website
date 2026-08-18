import { siteData } from "../data/siteData";
import SafeImage from "./SafeImage";

export default function About() {
  const { about } = siteData;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/20 to-yellow-500/20 rounded-2xl blur-xl" />
            <SafeImage
              src={about.photo}
              alt={`${siteData.djName} performing`}
              className="relative rounded-2xl w-full aspect-[4/5] object-cover neon-border"
              fallbackIndex={0}
            />
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              {about.title}
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-300 text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {about.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
