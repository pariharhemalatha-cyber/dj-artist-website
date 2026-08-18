import { useState } from "react";
import { Music } from "lucide-react";

const FALLBACKS = [
  "from-red-600/30 via-orange-600/20 to-yellow-600/30",
  "from-yellow-600/30 via-orange-500/20 to-red-500/30",
  "from-purple-600/30 via-indigo-600/20 to-cyan-600/30",
];

export default function SafeImage({
  src,
  alt,
  className = "",
  fallbackIndex = 0,
  showIcon = true,
  ...props
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`bg-gradient-to-br ${FALLBACKS[fallbackIndex % FALLBACKS.length]} flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt}
      >
        {showIcon && (
          <div className="text-center px-4">
            <Music size={32} className="text-white/20 mx-auto mb-2" />
            <span className="text-white/30 text-xs font-medium">{alt}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
