import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';



export default function Catalog() {
  
    useEffect(() => {
    document.title = 'Flor de Estudiantes | Nuestro Catálogo';
  }, []);

  return (
    <section>
      <h2 className="mb-4">Nuestro catálogo</h2>
      <Row xs={1} sm={2} lg={3} className="g-4">
        {products.map((p) => (
          <Col key={p.id}>
            <ProductCard p={p} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
