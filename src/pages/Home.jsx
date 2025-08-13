import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>Flor de Estudio</h1>
      <p>Arreglos temáticos para cada ocasión académica.</p>
      <Link to="/catalogo" className="btn">Ver catálogo</Link>
    </section>
  );
}