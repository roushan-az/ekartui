import { useState, useMemo } from "react";
import { X, SlidersHorizontal, Grid, List } from "lucide-react";
import { products } from "../../data/products";

import "./ProductsPage.css";
import FiltersPanel from "./FiltersPanel";
import ProductCard from "../product/ProductCard";

const categories = ["All", "Electronics", "Accessories", "Footwear", "Home & Kitchen"];
const brands = ["All", "TechPro", "FitGear", "StyleCraft", "SportMax", "HomeEssentials", "GamePro"];

const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Customer Rating" },
  { value: "newest", label: "Newest First" }
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= minRating;
      
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating;
    });

    // Sorting
    switch(sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }, [search, selectedCategory, selectedBrands, priceRange, minRating, sortBy]);

  const clearAllFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedBrands([]);
    setPriceRange([0, 10000]);
    setMinRating(0);
  };

  const hasActiveFilters = Boolean(
    search || 
    selectedCategory !== "All" || 
    selectedBrands.length > 0 || 
    priceRange[0] !== 0 || 
    priceRange[1] !== 10000 || 
    minRating > 0
  );

  const removeFilter = (type: string, value?: string) => {
    switch(type) {
      case 'search':
        setSearch("");
        break;
      case 'category':
        setSelectedCategory("All");
        break;
      case 'brand':
        if (value) {
          setSelectedBrands(selectedBrands.filter(b => b !== value));
        }
        break;
    }
  };

  return (
    <div className="products-page">
      {/* Mobile Filter Button */}
      <button
        onClick={() => setFiltersOpen(true)}
        className="mobile-filter-btn"
        aria-label="Open filters"
      >
        <SlidersHorizontal />
      </button>

      {/* Filter Backdrop */}
      {filtersOpen && (
        <div
          className="filters-backdrop"
          onClick={() => setFiltersOpen(false)}
        />
      )}

      <div className="products-container">
        {/* Sidebar */}
        <aside className={`products-sidebar ${filtersOpen ? 'open' : ''}`}>
          <div className="sidebar-mobile-header">
            <h2>Filters</h2>
            <button
              onClick={() => setFiltersOpen(false)}
              className="close-filters-btn"
              aria-label="Close filters"
            >
              <X />
            </button>
          </div>

          <FiltersPanel
            search={search}
            setSearch={setSearch}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            minRating={minRating}
            setMinRating={setMinRating}
            categories={categories}
            brands={brands}
            hasActiveFilters={hasActiveFilters}
            clearAll={clearAllFilters}
          />
        </aside>

        {/* Main Content */}
        <main className="products-main">
          {/* Header Bar */}
          <div className="products-header">
            <div className="header-top">
              <div className="header-info">
                <h1 className="page-title">
                  {selectedCategory === "All" ? "All Products" : selectedCategory}
                </h1>
                <p className="products-count">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </p>
              </div>
              
              <div className="header-actions">
                {/* View Toggle */}
                <div className="view-toggle">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    aria-label="Grid view"
                  >
                    <Grid />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    aria-label="List view"
                  >
                    <List />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="active-filters">
                <span className="active-filters-label">Active Filters:</span>
                {search && (
                  <span className="filter-tag">
                    Search: {search}
                    <button onClick={() => removeFilter('search')} aria-label="Remove search filter">
                      <X />
                    </button>
                  </span>
                )}
                {selectedCategory !== "All" && (
                  <span className="filter-tag">
                    {selectedCategory}
                    <button onClick={() => removeFilter('category')} aria-label="Remove category filter">
                      <X />
                    </button>
                  </span>
                )}
                {selectedBrands.map(brand => (
                  <span key={brand} className="filter-tag">
                    {brand}
                    <button onClick={() => removeFilter('brand', brand)} aria-label={`Remove ${brand} filter`}>
                      <X />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="empty-title">No products found</h3>
              <p className="empty-description">Try adjusting your filters or search terms</p>
              <button onClick={clearAllFilters} className="clear-filters-btn">
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'products-grid' : 'products-list'}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}