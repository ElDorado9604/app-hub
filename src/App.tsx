import { useMemo, useCallback, useEffect } from "react";
import { apps } from "./data/apps";
import type { Category, RecentApp } from "./types/app";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CategoryFilters } from "./components/CategoryFilters";
import { RecentApps } from "./components/RecentApps";
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
  const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);
  const [recents, setRecents] = useLocalStorage<RecentApp[]>("recents", []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  const toggleFavorite = useCallback(
    (id: string) => {
      setFavorites((prev) =>
        prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
      );
    },
    [setFavorites]
  );

  const handleOpen = useCallback(
    (id: string) => {
      setRecents((prev) => {
        const filtered = prev.filter((r) => r.id !== id);
        return [{ id, openedAt: Date.now() }, ...filtered].slice(0, 5);
      });
    },
    [setRecents]
  );

  const clearRecents = useCallback(() => {
    setRecents([]);
  }, [setRecents]);

  const clearFilters = useCallback(() => {
    setSearch("");
    setCategory("All");
  }, [setSearch, setCategory]);

  const filteredApps = useMemo(() => {
    let result = apps;

    if (category === "Favorites") {
      result = result.filter((a) => favorites.includes(a.id));
    } else if (category !== "All") {
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
  }, [category, search, favorites]);

  const recentApps = useMemo(() => {
    return recents
      .map((r) => apps.find((a) => a.id === r.id))
      .filter((a): a is NonNullable<typeof a> => a != null)
      .slice(0, 5);
  }, [recents]);

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
          <CategoryFilters
            selected={category}
            onSelect={setCategory}
            favoriteCount={favorites.length}
          />
        </div>
        <RecentApps
          apps={recentApps}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onOpen={handleOpen}
          onClear={clearRecents}
        />
        <section aria-labelledby="all-apps-heading">
          <h2 id="all-apps-heading" className="section-title visually-hidden">
            All apps
          </h2>
          <AppGrid
            apps={filteredApps}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpen={handleOpen}
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
