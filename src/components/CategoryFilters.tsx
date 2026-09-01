import type { Category } from "../types/app";
import { apps } from "../data/apps";

interface CategoryFiltersProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

const CATEGORIES: Category[] = [
  "All",
  "QA",
  "AI",
  "PDF Tools",
  "Productivity",
  "Utilities",
];

function getCount(category: Category): number {
  if (category === "All") return apps.length;
  return apps.filter((a) => a.category === category).length;
}

export function CategoryFilters({
  selected,
  onSelect,
}: CategoryFiltersProps) {
  return (
    <div
      className="category-filters"
      role="group"
      aria-label="Filter by category"
    >
      {CATEGORIES.map((cat) => {
        const count = getCount(cat);
        const isSelected = selected === cat;
        return (
          <button
            key={cat}
            type="button"
            className={`category-btn${isSelected ? " category-btn--active" : ""}`}
            onClick={() => onSelect(cat)}
            aria-pressed={isSelected}
            aria-label={`${cat}, ${count} apps`}
          >
            <span className="category-label">{cat}</span>
            <span className="category-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
