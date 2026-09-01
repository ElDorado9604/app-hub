import type { App } from "../types/app";
import { AppCard } from "./AppCard";

interface RecentAppsProps {
  apps: App[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpen: (id: string) => void;
  onClear: () => void;
}

export function RecentApps({
  apps,
  favorites,
  onToggleFavorite,
  onOpen,
  onClear,
}: RecentAppsProps) {
  if (apps.length === 0) return null;

  return (
    <section className="recent-section" aria-labelledby="recent-heading">
      <div className="recent-header">
        <h2 id="recent-heading" className="section-title">
          Recently opened
        </h2>
        <button
          type="button"
          className="clear-recent-btn"
          onClick={onClear}
          aria-label="Clear recently opened apps"
        >
          Clear
        </button>
      </div>
      <div className="recent-grid" role="list">
        {apps.map((app) => (
          <div key={app.id} role="listitem">
            <AppCard
              app={app}
              isFavorite={favorites.includes(app.id)}
              onToggleFavorite={onToggleFavorite}
              onOpen={onOpen}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
