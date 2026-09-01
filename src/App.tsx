import { useMemo, useCallback, useEffect } from "react";
import { apps } from "./data/apps";
import type { Category, ViewMode } from "./types/app";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CategoryFilters } from "./components/CategoryFilters";
import { ViewToggle } from "./components/ViewToggle";
import { AppGrid } from "./components/AppGrid";

function getPreferredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    getPreferredTheme()
  );
  const [search, setSearch] = useLocalStorage<string>("search", "");
  const [category, setCategory] = useLocalStorage<Category>("category", "All");
  const [view, setView] = useLocalStorage<ViewMode>("view", "grid");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  const clearFilters = useCallback(() => {
    setSearch("");
    setCategory("All");
  }, [setSearch, setCategory]);

  const filteredApps = useMemo(() => {
    let result = apps;

    if (category !== "All") {
      result = result.filter((a) => a.category === category);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [category, search]);

  return (
    <div className="app">
      <Header
        appCount={apps.length}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="main">
        <div className="controls">
          <SearchBar value={search} onChange={setSearch} />
          <div className="controls-row">
            <CategoryFilters selected={category} onSelect={setCategory} />
            <ViewToggle view={view} onChange={setView} />
          </div>
        </div>
        <section aria-labelledby="all-apps-heading">
          <h2 id="all-apps-heading" className="section-title visually-hidden">
            All apps
          </h2>
          <AppGrid
            apps={filteredApps}
            view={view}
            onClearFilters={clearFilters}
          />
        </section>
      </main>
      <footer className="footer">
        <p>App Hub · Static launcher for your web apps</p>
      </footer>
    </div>
  );
}
