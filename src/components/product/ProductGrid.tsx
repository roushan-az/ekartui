import { products } from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode="grid"   // ✅ REQUIRED PROP
        />
      ))}
    </div>
  );
}
