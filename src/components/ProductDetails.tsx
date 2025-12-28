import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) return <p>Product not found</p>;

  return (
    <section className="product-details container">
      <div className="product-layout">
        {/* Left Image */}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Right Content */}
        <div className="product-info">
          <h1>{product.name}</h1>

          <p className="price">
            Rs. {product.price}
            {product.originalPrice && (
              <span> Rs. {product.originalPrice}</span>
            )}
          </p>

          <p className="tax">Tax included.</p>

          <div className="actions">
            <button className="add-cart">Add to cart</button>
            <button className="buy-now">Buy it now</button>
          </div>

          <div className="description">
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
