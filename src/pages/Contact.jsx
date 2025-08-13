export default function Contact() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre
          <input type="text" required />
        </label>
        <label>
          Email
          <input type="email" required />
        </label>
        <label>
          Mensaje
          <textarea rows="4" required />
        </label>
        <button className="btn" type="submit" disabled>Enviar</button>
      </form>
    </section>
  );
}