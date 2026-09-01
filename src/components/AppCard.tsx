import type { App, ViewMode } from "../types/app";

interface AppCardProps {
  app: App;
  view: ViewMode;
}

export function AppCard({ app, view }: AppCardProps) {
  const isGrid = view === "grid";

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`app-card app-card--${view}`}
      aria-label={`Open ${app.name}`}
    >
      <span className="app-icon" aria-hidden="true">
        {app.icon}
      </span>
      <div className="app-card-body">
        <div className="app-card-top">
          <h3 className="app-name">{app.name}</h3>
          {!isGrid && (
            <span className="category-badge">{app.category}</span>
          )}
        </div>
        {!isGrid && (
          <p className="app-description">{app.description}</p>
        )}
        {isGrid && (
          <span className="category-badge category-badge--compact">
            {app.category}
          </span>
        )}
      </div>
      <span className="open-cta" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
