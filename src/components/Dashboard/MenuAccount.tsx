import { useShowAccountMenuStore } from "../../store/slices/sliceShowAccountMenu";

import "../../assets/styles/header-dash.css";
import { Button } from "../index";
import { LogOut } from "../../assets/icons";

const MenuAccount = () => {
  const { isOpenAccountMenu, handleToggleShowAccountMenu } =
    useShowAccountMenuStore();

  return (
    <div
      className={`menu w-full h-max p-5 absolute top-14 right-0 flex flex-col gap-2 justify-center items-center rounded-md shadow-lg z-40 md:w-72 md:right-5 lg:right-10 xl:right-20 bg-page-bg ${
        isOpenAccountMenu ? "show" : ""
      } `}
      id="account"
    >
      <span className="w-10 h-10 p-2 bg-amber-700 rounded-full text-stone-50 text-center">
        M
      </span>
      <hr className="border-1 border-stone-300 w-full" />
      <div className="flex flex-col gap-2 ">
        <span className="text-md text-text-color/50 font-medium">
          Oscar Hernández
        </span>
        <span className="text-md text-text-color/50 font-medium">
          ohdz202@gmail.com
        </span>
      </div>
      <hr className="border-1 border-stone-300 w-full" />

      <div className="flex flex-col gap-2 w-full">
        <Button
          type="button"
          styles="w-full flex justify-center items-center gap-3"
          onClick={handleToggleShowAccountMenu}
        >
          Cerrar sesión <LogOut />
        </Button>
      </div>
    </div>
  );
};

export default MenuAccount;
