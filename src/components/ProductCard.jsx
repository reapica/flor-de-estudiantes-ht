export default function ProductCard({ p }) {
  return (
    <article
      className="card"
    >
      <div className="card-emoji" aria-hidden>
        <span className="emoji">{p.emoji}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{p.name}</h3>
        <p className="card-desc">{p.description}</p>
        <div className="card-meta">
          <span className="price">${p.price}</span>
          <button className="btn" disabled>Añadir al carrito</button>
        </div>
      </div>
    </article>
  );
}