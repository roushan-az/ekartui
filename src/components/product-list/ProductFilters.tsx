interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  onPriceChange: (price: number | null) => void;
}

export default function ProductFilters({
  search,
  onSearchChange,
  onPriceChange
}: Props) {
  return (
    <div className="filter-box">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>Search</label>
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Price</label>

        <button onClick={() => onPriceChange(300)}>Under ₹300</button>
        <button onClick={() => onPriceChange(500)}>Under ₹500</button>
        <button onClick={() => onPriceChange(800)}>Under ₹800</button>

        <button className="clear-btn" onClick={() => onPriceChange(null)}>
          Clear all
        </button>
      </div>
    </div>
  );
}
