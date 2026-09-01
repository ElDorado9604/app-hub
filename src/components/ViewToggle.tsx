import type { ViewMode } from "../types/app";

interface ViewToggleProps {
  view: ViewMode;
  onChange: (view: ViewMode) => void;
}

export function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div className="view-toggle" role="group" aria-label="View mode">
      <button
        type="button"
        className={`view-btn${view === "grid" ? " view-btn--active" : ""}`}
        onClick={() => onChange("grid")}
        aria-pressed={view === "grid"}
        aria-label="Grid view"
        title="Grid view"
      >
        <span aria-hidden="true">▦</span>
      </button>
      <button
        type="button"
        className={`view-btn${view === "list" ? " view-btn--active" : ""}`}
        onClick={() => onChange("list")}
        aria-pressed={view === "list"}
        aria-label="List view"
        title="List view"
      >
        <span aria-hidden="true">☰</span>
      </button>
    </div>
  );
}
