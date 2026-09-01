import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  appCount: number;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Header({ appCount, theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">App Hub</h1>
          <p className="header-subtitle">
            One place for all my web applications.
          </p>
          <p className="header-count" aria-live="polite">
            {appCount} {appCount === 1 ? "app" : "apps"} available
          </p>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
