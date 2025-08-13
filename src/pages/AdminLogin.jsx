import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'Marianito' && password === 'chocolateconalmendras') {
      // un regalito para los que se salgan del scope de la room
      alert('Yo te avisé que no se podía')
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      }
 else {
      alert('❌ Credenciales incorrectas');
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <div className="border rounded-3 p-4 shadow-sm bg-light" style={{ maxWidth: 360, width: '100%' }}>
        <h2 className="mb-3">Acceso administrador</h2>
        <p className="text-muted small mb-4">Zona restringida. Solo personal autorizado.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="adminUser">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              placeholder="usuario"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="adminPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">Entrar</Button>
        </Form>
      </div>
    </section>
  );
}
