import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';



export default function Contact() {
  
    useEffect(() => {
    document.title = 'Flor de Estudiantes | Contáctanos';
  }, []);

  return (
    <section className="mx-auto" style={{ maxWidth: 480 }}>
      <h2 className="mb-4">Contacto</h2>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={4} required />
        </Form.Group>
        <Button variant="primary" type="submit" disabled>
          Enviar
        </Button>
      </Form>
    </section>
  );
}
