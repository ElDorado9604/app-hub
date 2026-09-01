interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <label htmlFor="app-search" className="visually-hidden">
        Search apps
      </label>
      <div className="search-input-wrapper">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          id="app-search"
          type="search"
          className="search-input"
          placeholder="Search apps, categories, or tags…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          aria-label="Search apps, categories, or tags"
        />
        {value && (
          <button
            type="button"
            className="search-clear"
            onClick={() => onChange("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
