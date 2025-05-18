import { Button } from "../index";
import { useShowAddCardStore } from "../../store/slices/sliceShowAddCard";

const AddCard = () => {
  const { isOpenAddCard, handleToggleAddCard } = useShowAddCardStore();

  return (
    <div
      className={`menu fixed top-0 left-0 w-screen h-screen bg-stone-950/20 flex justify-center items-center z-50 ${
        isOpenAddCard ? "show" : ""
      } `}
    >
      <form
        className={`menu w-72 h-max absolute top-1/2 left-1/2 transform -translate-1/2 p-5 rounded-md bg-dashboard-sidebar-bg flex flex-col gap-3  ${
          isOpenAddCard ? "show" : ""
        } `}
        id="modal"
        popover="auto"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="text-xl text-dashboard-text-color/70 font-medium"
          >
            Nombre de la Tarjeta
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Nombre de la Tarjeta"
            className="outline-none border-1 border-btn-secondary-bg w-full h-10 rounded-md px-3 text-dashboard-text-color placeholder:text-dashboard-text-color/70"
          />
        </div>
        <Button
          type="button"
          styles="w-full h-10 bg-btn-secondary-bg/30 text-btn-primary-text hover:bg-btn-secondary-hover/50"
          onClick={handleToggleAddCard}
        >
          Crear Tarjeta
        </Button>
      </form>
    </div>
  );
};

export default AddCard;
