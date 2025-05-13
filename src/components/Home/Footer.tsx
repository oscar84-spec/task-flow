import { KanbanIcon } from "../../assets/icons";
import "../../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-20 bg-footer-bg footer lg:px-10 xl:px-20">
      <div className="flex flex-col gap-3 logo">
        <div className="flex items-center gap-2">
          <KanbanIcon styles="size-7 text-icon-color" />
          <h3 className="text-2xl text-text-light font-medium">TaskFlow</h3>
        </div>
        <p className="text-md text-text-light/60 text-pretty">
          Organiza todo, juntos. TaskFlow ayuda a los equipos a avanzar en su
          trabajo.
        </p>
      </div>
      <ul className="flex flex-col gap-2 mt-10 producto md:mt-0">
        <h3 className="text-xl text-text-light/80 font-medium mb-2">
          Producto
        </h3>
        <li className="w-max text-md text-text-light/60 cursor-pointer hover:scale-105 hover:text-text-light hover:transition-all ease-in-out duration-300">
          Funciones
        </li>
        <li className="w-max text-md text-text-light/60 cursor-pointer hover:scale-105 hover:text-text-light hover:transition-all ease-in-out duration-300">
          Integraciones
        </li>
        <li className="w-max text-md text-text-light/60 cursor-pointer hover:scale-105 hover:text-text-light hover:transition-all ease-in-out duration-300">
          Precios
        </li>
      </ul>
      <ul className="flex flex-col gap-2 mt-10 recursos md:mt-0">
        <h3 className="text-xl text-text-light/80 font-medium mb-2">
          Recursos
        </h3>
        <li className="w-max text-md text-text-light/60 cursor-pointer hover:scale-105 hover:text-text-light hover:transition-all ease-in-out duration-300">
          Blog
        </li>
        <li className="w-max text-md text-text-light/60 cursor-pointer hover:scale-105 hover:text-text-light hover:transition-all ease-in-out duration-300">
          Documentación
        </li>
        <li className="w-max text-md text-text-light/60 cursor-pointer hover:scale-105 hover:text-text-light hover:transition-all ease-in-out duration-300">
          Guías
        </li>
      </ul>
      <ul className="flex flex-col gap-2 mt-10 empresa md:mt-0">
        <h3 className="text-xl text-text-light/80 font-medium mb-2">Empresa</h3>
        <li className="w-max text-md text-text-light/60 cursor-pointer hover:scale-105 hover:text-text-light hover:transition-all ease-in-out duration-300">
          Sobre nosotros
        </li>
        <li className="w-max text-md text-text-light/60 cursor-pointer hover:scale-105 hover:text-text-light hover:transition-all ease-in-out duration-300">
          Empleo
        </li>
        <li className="w-max text-md text-text-light/60 cursor-pointer hover:scale-105 hover:text-text-light hover:transition-all ease-in-out duration-300">
          Contacto
        </li>
      </ul>
      <hr className="border-1 border-text-light/20 divider" />
      <span className="text-md text-text-light/60 text-pretty copyright">
        © 2024 TaskFlow. Todos los derechos reservados.
      </span>
    </footer>
  );
};

export default Footer;
