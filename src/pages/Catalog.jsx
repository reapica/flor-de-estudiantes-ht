import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  return (
    <section>
      <h2>Catálogo</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}