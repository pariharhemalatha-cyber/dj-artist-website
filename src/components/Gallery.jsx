import { useState } from "react";
import { X } from "lucide-react";
import { siteData } from "../data/siteData";
import SafeImage from "./SafeImage";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Photo <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Moments from the dance floor
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {siteData.gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(src)}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <SafeImage
                src={src}
                alt={`Gallery photo ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                fallbackIndex={i}
                showIcon={false}
              />
              <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-colors pointer-events-none" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <SafeImage
            src={lightbox}
            alt="Gallery full view"
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            fallbackIndex={0}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
