// src/components/ProductCard.jsx
import { Card, Button } from 'react-bootstrap';

export default function ProductCard({ p }) {
  return (
    <Card
      className="mb-4"
      data-sku={p.sku}
      data-k={p.hiddenKey}
      data-hash={p.hiddenHash}
    >
      {/* Cabecera de imagen (alto fijo + cover) */}
      <div
        style={{
          width: '100%',
          height: '220px',                 // todas iguales
          overflow: 'hidden',
          borderTopLeftRadius: '.375rem',  // redondea como la Card
          borderTopRightRadius: '.375rem',
          background: p.image ? 'none' : 'linear-gradient(180deg,#f8f9fa,#e9ecef)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={`Imagen de ${p.name}`}
            className="w-100 h-100"
            style={{ objectFit: 'cover', display: 'block' }}
          />
        ) : (
          // Placeholder si aún no cargaste imagen para ese producto
          <span style={{ fontSize: '3rem', lineHeight: 1 }}>{p.emoji}</span>
        )}
      </div>

      <Card.Body>
        <Card.Title className="mb-2">{p.name}</Card.Title>
        <Card.Text className="text-muted">{p.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="fs-5 fw-semibold">${p.price}</div>
          <Button variant="outline-primary" disabled>
            Añadir al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
