import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }: any) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/product/${product.slug}`)}
      role="button"
    >
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <p className="price">
        Rs. {product.price}
        {product.originalPrice && <span> Rs. {product.originalPrice}</span>}
      </p>

      <button
        className="buy"
        onClick={(e) => e.stopPropagation()}
      >
        Buy now
      </button>
    </div>
  );
}
