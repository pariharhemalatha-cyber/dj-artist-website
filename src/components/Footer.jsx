import { siteData } from "../data/siteData";

function SocialIcon({ platform, size = 18 }) {
  const icons = {
    instagram: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    youtube: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
    spotify: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    soundcloud: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.175 13.5c-.645 0-1.175.53-1.175 1.175v2.65c0 .645.53 1.175 1.175 1.175S2.35 17.97 2.35 17.325v-2.65c0-.645-.53-1.175-1.175-1.175zm2.925 1.05c-.645 0-1.175.53-1.175 1.175v1.6c0 .645.53 1.175 1.175 1.175s1.175-.53 1.175-1.175v-1.6c0-.645-.53-1.175-1.175-1.175zm2.925-2.1c-.645 0-1.175.53-1.175 1.175v3.7c0 .645.53 1.175 1.175 1.175s1.175-.53 1.175-1.175v-3.7c0-.645-.53-1.175-1.175-1.175zm2.925-1.05c-.645 0-1.175.53-1.175 1.175v4.75c0 .645.53 1.175 1.175 1.175s1.175-.53 1.175-1.175v-4.75c0-.645-.53-1.175-1.175-1.175zm2.925-.525c-.645 0-1.175.53-1.175 1.175v5.275c0 .645.53 1.175 1.175 1.175s1.175-.53 1.175-1.175V12.15c0-.645-.53-1.175-1.175-1.175zm2.925-.525c-.645 0-1.175.53-1.175 1.175v5.8c0 .645.53 1.175 1.175 1.175s1.175-.53 1.175-1.175v-5.8c0-.645-.53-1.175-1.175-1.175zm2.925-1.575c-.645 0-1.175.53-1.175 1.175v7.375c0 .645.53 1.175 1.175 1.175s1.175-.53 1.175-1.175V10.5c0-.645-.53-1.175-1.175-1.175zm2.925-1.05c-.645 0-1.175.53-1.175 1.175v8.475c0 .645.53 1.175 1.175 1.175s1.175-.53 1.175-1.175V10.5c0-.645-.53-1.175-1.175-1.175zm2.925-.525c-.645 0-1.175.53-1.175 1.175v9c0 .645.53 1.175 1.175 1.175s1.175-.53 1.175-1.175v-9c0-.645-.53-1.175-1.175-1.175zm2.925-.525c-.645 0-1.175.53-1.175 1.175v9.525c0 .645.53 1.175 1.175 1.175s1.175-.53 1.175-1.175v-9.525c0-.645-.53-1.175-1.175-1.175z" />
      </svg>
    ),
    tiktok: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.07a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.87-.07z" />
      </svg>
    ),
  };

  return icons[platform] || null;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold gradient-text">
              {siteData.djName}
            </p>
            <p className="text-sm text-gray-400 mt-1">{siteData.subtitle}</p>
          </div>

          <div className="flex items-center gap-4">
            {Object.entries(siteData.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:neon-border transition-all"
                aria-label={platform}
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>
            &copy; {year} {siteData.djName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
