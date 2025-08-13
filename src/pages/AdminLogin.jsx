export default function AdminLogin() {
  return (
    <section className="admin">
      <h2>Acceso administrador</h2>
      <p className="muted">Zona restringida. Solo personal autorizado.</p>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Usuario
          <input type="text" placeholder="usuario" autoComplete="username" />
        </label>
        <label>
          Contraseña
          <input type="password" placeholder="••••••••" autoComplete="current-password" />
        </label>
        <button className="btn" type="submit" disabled>Entrar</button>
      </form>
    </section>
  );
}