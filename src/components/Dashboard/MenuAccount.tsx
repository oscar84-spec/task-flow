import { useShowAccountMenuStore } from "../../store/slices/sliceShowAccountMenu";

import "../../assets/styles/header-dash.css";
import { Button } from "../index";
import { LogOut, ArrowDownIcon, ArrowRightIcon } from "../../assets/icons";
import { logoutUser } from "../../services/users";
import { useNavigate } from "react-router-dom";
import { useUserDataStore } from "../../store/slices/sliceUserData";
import { useEffect, useState } from "react";
import { getDataUser } from "../../services/users";
import { useGetBoardByIdStore } from "../../store/slices/sliceGetBoardById";

const MenuAccount = () => {
  const { isOpenAccountMenu, handleToggleShowAccountMenu } =
    useShowAccountMenuStore();

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { board } = useGetBoardByIdStore();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    const res = await logoutUser();
    if (res) {
      handleToggleShowAccountMenu();
      navigate("/");
    }
  };

  const { user, setUser } = useUserDataStore();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getDataUser();
        setUser(res?.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getUser();
  }, [setUser]);

  if (loading) return <p>Cargando...</p>;
  if (!user) return <p>No tienes acceso. Inicia sesión.</p>;

  return (
    <div
      className={`menu w-full h-max p-5 absolute top-14 right-0 flex flex-col gap-2 justify-center items-center rounded-md shadow-lg z-40 md:w-72 md:right-5 lg:right-10 xl:right-20 bg-page-bg ${
        isOpenAccountMenu ? "show" : ""
      } `}
      id="account"
    >
      <span className="w-10 h-10 p-2 bg-amber-700 rounded-full text-stone-50 text-center">
        {user.name.charAt(0)}
      </span>
      <hr className="border-1 border-stone-300 w-full" />
      <div className="flex flex-col gap-2 ">
        <span className="text-md text-text-color/50 font-medium">
          {user.name} {user.lastName}
        </span>
        <span className="text-md text-text-color/50 font-medium">
          {user.email}
        </span>
      </div>
      <hr className="border-1 border-stone-300 w-full" />

      <Button
        type="button"
        styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-stone-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ArrowDownIcon styles="size-3 text-icon-color" />
        ) : (
          <ArrowRightIcon styles="size-3 text-icon-color" />
        )}
        <span className="text-sm text-text-color">Tus tableros</span>
      </Button>
      {isOpen && (
        <div
          className={`w-full pl-4 lg:pl-7 
           ${board?.length ?? 0 ? "h-max max-h-28 overflow-y-auto" : "h-0"} `}
        >
          {loading && (
            <span className="text-sm text-text-color">Cargando...</span>
          )}
          {board?.map((b) => (
            <Button
              type="button"
              styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-stone-200"
              key={b._id}
            >
              <span className="text-sm text-text-color">{b.title}</span>
            </Button>
          ))}
        </div>
      )}
      <hr className="border-1 border-stone-300 w-full" />

      <div className="flex flex-col gap-2 w-full">
        <Button
          type="button"
          styles="w-full flex justify-center items-center gap-3"
          onClick={handleLogOut}
        >
          Cerrar sesión <LogOut />
        </Button>
      </div>
    </div>
  );
};

export default MenuAccount;
