import { Link } from "react-router-dom";
import { Button } from "../index";
import { useSidebarStore } from "../../store/slices/sliceSidebar";

const Sidebar = () => {
  const { isOpen } = useSidebarStore();

  return (
    <aside
      className={`w-full h-[calc(100vh-56px)] flex flex-col items-center gap-10 bg-sidebar-bg absolute top-14 left-0
    ${
      isOpen
        ? "translate-x-0 opacity-100 transition-all ease-in-out duration-1000"
        : "translate-x-full opacity-0 transition-all ease-in-out duration-1000"
    } `}
    >
      <nav className="mt-20 flex flex-col gap-4">
        <Link to="" className="text-lg text-sidebar-text font-medium">
          Funciones
        </Link>
        <Link to="" className="text-lg text-sidebar-text font-medium">
          Soluciones
        </Link>
        <Link to="" className="text-lg text-sidebar-text font-medium">
          Recurso
        </Link>
        <Link to="" className="text-lg text-sidebar-text font-medium">
          Precios
        </Link>
      </nav>
      <div className="flex flex-col gap-5">
        <Link to="/login">
          <Button type="button">Iniciar sesión</Button>
        </Link>
        <Link to="/register">
          <Button
            type="button"
            styles="bg-btn-secondary-bg text-btn-secondary-text hover:bg-btn-secondary-hover"
          >
            Registrarse
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
