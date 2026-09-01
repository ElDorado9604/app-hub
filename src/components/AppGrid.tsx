import type { App, ViewMode } from "../types/app";
import { AppCard } from "./AppCard";

interface AppGridProps {
  apps: App[];
  view: ViewMode;
  onClearFilters: () => void;
}

export function AppGrid({ apps, view, onClearFilters }: AppGridProps) {
  if (apps.length === 0) {
    return (
      <div className="empty-state" role="status">
        <p className="empty-state-icon" aria-hidden="true">
          🔍
        </p>
        <h2 className="empty-state-title">No apps found</h2>
        <p className="empty-state-text">
          Try adjusting your search or category filters.
        </p>
        <button
          type="button"
          className="empty-state-btn"
          onClick={onClearFilters}
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className={`app-grid app-grid--${view}`} role="list">
      {apps.map((app) => (
        <div key={app.id} role="listitem">
          <AppCard app={app} view={view} />
        </div>
      ))}
    </div>
  );
}
