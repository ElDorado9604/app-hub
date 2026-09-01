export type Category =
  | "All"
  | "QA"
  | "AI"
  | "PDF Tools"
  | "Productivity"
  | "Utilities";

export type ViewMode = "grid" | "list";

export interface App {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Exclude<Category, "All">;
  tags: string[];
  icon: string;
}
