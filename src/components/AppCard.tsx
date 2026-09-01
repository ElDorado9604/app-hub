import type { App } from "../types/app";

interface AppCardProps {
  app: App;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpen: (id: string) => void;
}

export function AppCard({
  app,
  isFavorite,
  onToggleFavorite,
  onOpen,
}: AppCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(app.id);
  };

  const handleOpen = () => {
    onOpen(app.id);
  };

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="app-card"
      onClick={handleOpen}
      aria-label={`Open ${app.name}`}
    >
      <div className="app-card-header">
        <span className="app-icon" aria-hidden="true">
          {app.icon}
        </span>
        <button
          type="button"
          className={`favorite-btn${isFavorite ? " favorite-btn--active" : ""}`}
          onClick={handleFavoriteClick}
          aria-label={
            isFavorite
              ? `Remove ${app.name} from favorites`
              : `Add ${app.name} to favorites`
          }
          aria-pressed={isFavorite}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
      <h3 className="app-name">{app.name}</h3>
      <p className="app-description">{app.description}</p>
      <div className="app-meta">
        <span className="category-badge">{app.category}</span>
        <div className="app-tags">
          {app.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span className="open-cta">
        Open app <span aria-hidden="true">↗</span>
      </span>
    </a>
  );
}
