import { KanbanIcon, AccountIcon, AddIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { MenuAccount } from "./index";
import { useShowAccountMenuStore } from "../../store/slices/sliceShowAccountMenu";
import { useShowModalStore } from "../../store/slices/sliceShowModal";

const Header = () => {
  const { handleToggleShowAccountMenu } = useShowAccountMenuStore();
  const { handleToggleModal } = useShowModalStore();

  return (
    <header className="w-full h-14 bg-dashboard-header-bg flex justify-between items-center px-5 relative z-50 lg:px-10 xl:px-20">
      <div className="flex items-center gap-2 md:gap-5 lg:gap-10 xl:gap-20">
        <Link to="" className="flex gap-2 items-center">
          <KanbanIcon styles="size-7 text-icon-color" />
          <span className="text-xl text-dashboard-header-text font-medium">
            TaskFlow
          </span>
        </Link>
        <nav className="hidden text-dashboard-text-color md:flex md:items-center md:gap-2 md:text-md lg:gap-5">
          <Link
            to=""
            className="cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300"
          >
            Tablero
          </Link>
          <Link
            to=""
            className="cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300"
          >
            Recientes
          </Link>
          <Link
            to=""
            className="cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300"
          >
            Destacados
          </Link>
        </nav>
      </div>
      <div className="flex gap-2 items-center">
        <button
          type="button"
          className="p-2 bg-dashboard-btn-primary-bg rounded-md transition-colors ease-in-out duration-500 hover:bg-dashboard-btn-primary-hover cursor-pointer"
          popoverTarget="modal"
          onClick={handleToggleModal}
        >
          <AddIcon styles="text-stone-50" />
        </button>
        <button
          type="button"
          className="p-2 bg-dashboard-btn-secondary-bg rounded-md transition-colors ease-in-out duration-500 hover:bg-dashboard-btn-secondary-hover cursor-pointer"
          onClick={handleToggleShowAccountMenu}
        >
          <AccountIcon styles="text-stone-50" />
        </button>
      </div>
      <MenuAccount />
    </header>
  );
};

export default Header;
