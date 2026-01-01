// src/pages/ProductsPage/ProductsLayout.tsx
import { useState } from "react";
import "./ProductsLayout.css";

interface Props {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export default function ProductsLayout({ sidebar, content }: Props) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <>
      {/* Mobile filter trigger */}
      <button
        className="mobile-filter-trigger"
        onClick={() => setFiltersOpen(true)}
      >
        Filters
      </button>

      <main className="products-layout">
        <aside className={`products-sidebar ${filtersOpen ? "open" : ""}`}>
          <div className="mobile-filter-header">
            <span>Filters</span>
            <button onClick={() => setFiltersOpen(false)}>✕</button>
          </div>

          {sidebar}
        </aside>

        <section className="products-main">{content}</section>
      </main>

      {/* Backdrop */}
      {filtersOpen && (
        <div
          className="filters-backdrop"
          onClick={() => setFiltersOpen(false)}
        />
      )}
    </>
  );
}
