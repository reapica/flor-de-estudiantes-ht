import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="brand">Flor de Estudio</div>
      <nav>
        <NavLink to="/" end className={({isActive}) => isActive ? "link active" : "link"}>Inicio</NavLink>
        <NavLink to="/catalogo" className={({isActive}) => isActive ? "link active" : "link"}>Catálogo</NavLink>
        <NavLink to="/contacto" className={({isActive}) => isActive ? "link active" : "link"}>Contacto</NavLink>
      </nav>
    </header>
  );
}