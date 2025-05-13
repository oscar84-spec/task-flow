import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:flex md:gap-4">
      <Link
        to=""
        className="text-md text-stone-50 cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300"
      >
        Funciones
      </Link>
      <Link
        to=""
        className="text-md text-stone-50 cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300"
      >
        Soluciones
      </Link>
      <Link
        to=""
        className="text-md text-stone-50 cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300"
      >
        Recurso
      </Link>
      <Link
        to=""
        className="text-md text-stone-50 cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300"
      >
        Precios
      </Link>
    </nav>
  );
};

export default Navbar;
