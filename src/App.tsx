import { useMemo, useCallback, useEffect } from "react";
import { apps } from "./data/apps";
import type { ViewMode } from "./types/app";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
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
  const [view, setView] = useLocalStorage<ViewMode>("view", "grid");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  const clearFilters = useCallback(() => {
    setSearch("");
  }, [setSearch]);

  const filteredApps = useMemo(() => {
    if (!search.trim()) return apps;

    const q = search.trim().toLowerCase();
    return apps.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="app">
      <Header
        appCount={apps.length}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="main">
        <div className="controls controls--simple">
          <SearchBar value={search} onChange={setSearch} />
          <ViewToggle view={view} onChange={setView} />
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
