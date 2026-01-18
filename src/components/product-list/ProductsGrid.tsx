
import { Link } from "react-router-dom";
import type { Product } from "../../data/products";
import "./ProductsGrid.css";

export default function ProductsGrid({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="products-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <Link to={`/product/${p.id}`}>
            <div className="image-wrap">
              <img src={p.image} alt={p.name} />
            </div>
          </Link>
          <h4>{p.name}</h4>
          <p className="price">Rs. {p.price}</p>
        </div>
      ))}
    </div>
  );
}
