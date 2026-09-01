export type Category =
  | "All"
  | "QA"
  | "AI"
  | "PDF Tools"
  | "Productivity"
  | "Utilities"
  | "Favorites";

export interface App {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Exclude<Category, "All" | "Favorites">;
  tags: string[];
  icon: string;
}

export interface RecentApp {
  id: string;
  openedAt: number;
}
