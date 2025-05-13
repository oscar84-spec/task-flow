import { Logo, Sidebar, Navbar } from "./index";
import { MenuIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { Button } from "../index";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-14 px-5 bg-header-bg fixed md:relative lg:px-10 xl:px-20">
      <div className="md:flex md:gap-5 md:items-center">
        <Logo
          stylesIcon="size-7 text-icon-color"
          stylesText="text-xl text-color-text"
        />
        <Navbar />
      </div>
      <MenuIcon />
      <div className="hidden md:flex md:gap-5 md:items-center">
        <Link to="/login">
          <Button type="button">Iniciar sesión</Button>
        </Link>
        <Link to="/register">
          <Button
            type="button"
            styles="bg-btn-secondary-bg text-btn-secondary-text hover:bg-btn-secondary-hover"
          >
            Registrate
          </Button>
        </Link>
      </div>
      <Sidebar />
    </header>
  );
};

export default Header;
