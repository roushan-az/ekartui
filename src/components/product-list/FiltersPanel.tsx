import { Star } from 'lucide-react';
import './FiltersPanel.css';

interface FiltersPanelProps {
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  categories: string[];
  brands: string[];
  hasActiveFilters: boolean;
  clearAll: () => void;
}

export default function FiltersPanel({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedBrands,
  setSelectedBrands,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  categories,
  brands,
  hasActiveFilters,
  clearAll,
}: FiltersPanelProps) {
  
  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="filters-panel">
      {/* Header */}
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        {hasActiveFilters && (
          <button onClick={clearAll} className="clear-all-btn">
            Clear All
          </button>
        )}
      </div>

      {/* Search */}
      <div className="filter-section">
        <label className="filter-label">Search Products</label>
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Categories */}
      <div className="filter-section filter-section-bordered">
        <h3 className="filter-heading">CATEGORY</h3>
        <div className="filter-options">
          {categories.map(cat => (
            <label key={cat} className="filter-option">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                className="radio-input"
              />
              <span className="option-label">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="filter-section filter-section-bordered">
        <h3 className="filter-heading">PRICE RANGE</h3>
        <div className="price-range-section">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="price-slider"
          />
          <div className="price-values">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
          <div className="price-presets">
            {[1000, 2000, 5000, 10000].map(price => (
              <button
                key={price}
                onClick={() => setPriceRange([0, price])}
                className={`price-preset ${priceRange[1] === price ? 'active' : ''}`}
              >
                Under ₹{price}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="filter-section filter-section-bordered">
        <h3 className="filter-heading">BRAND</h3>
        <div className="filter-options brand-options">
          {brands.filter(b => b !== "All").map(brand => (
            <label key={brand} className="filter-option">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="checkbox-input"
              />
              <span className="option-label">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="filter-section">
        <h3 className="filter-heading">CUSTOMER RATINGS</h3>
        <div className="filter-options">
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="filter-option">
              <input
                type="radio"
                name="rating"
                checked={minRating === rating}
                onChange={() => setMinRating(rating)}
                className="radio-input"
              />
              <div className="rating-option">
                <span>{rating}</span>
                <Star className="star-icon-filter" />
                <span className="rating-text">& above</span>
              </div>
            </label>
          ))}
          <label className="filter-option">
            <input
              type="radio"
              name="rating"
              checked={minRating === 0}
              onChange={() => setMinRating(0)}
              className="radio-input"
            />
            <span className="option-label">All Ratings</span>
          </label>
        </div>
      </div>
    </div>
  );
}