import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Home() {
  return (
    <section className="text-center py-5">
      <div className="badge bg-light text-muted mb-3">
        Arreglos temáticos para cada ocasión académica
      </div>
      <h1 className="display-4 fw-semibold">Flor de Estudiantes</h1>
      <p className="lead mb-4">
        Un catálogo delicado con inspiración académica. Elegí tu ramo favorito.
      </p>
      <LinkContainer to="/catalogo">
        <Button variant="primary" size="lg">Ver catálogo</Button>
      </LinkContainer>
    </section>
  );
}
