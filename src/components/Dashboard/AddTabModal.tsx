import { Button } from "../index";
import { useShowModalStore } from "../../store/slices/sliceShowModal";
import "../../assets/styles/header-dash.css";
import { validateBoard } from "../../validations/kanban";
import { useForm } from "react-hook-form";
import { createBoard } from "../../services/kanban";
import type { Board } from "../../types/BoardType";
import { useUserDataStore } from "../../store/slices/sliceUserData";

const AddTabModal = () => {
  const { isOpenModal, handleToggleModal } = useShowModalStore();
  const { user } = useUserDataStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Board>();

  const onSubmit = async (data: { title: string }) => {
    if (!user?._id) return;

    const boardData: Board = {
      userId: user._id,
      title: data.title,
    };

    try {
      const res = await createBoard(boardData);
      if (res) {
        handleToggleModal();
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`menu fixed top-0 left-0 w-screen h-screen bg-stone-950/20 flex justify-center items-center z-50 ${
        isOpenModal ? "show" : ""
      } `}
    >
      <form
        className={`menu w-72 h-max absolute top-1/2 left-1/2 transform -translate-1/2 p-5 rounded-md bg-dashboard-sidebar-bg flex flex-col gap-3  ${
          isOpenModal ? "show" : ""
        } `}
        id="modal"
        popover="auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="text-xl text-dashboard-text-color/70 font-medium"
          >
            Nombre del Tablero
          </label>
          <input
            type="text"
            placeholder="Nombre del Tablero"
            className="outline-none border-1 border-btn-secondary-bg w-full h-10 rounded-md px-3 text-dashboard-text-color placeholder:text-dashboard-text-color/70"
            {...register("title", validateBoard.title)}
          />
          {errors.title && (
            <span className="text-sm text-red-500">{errors.title.message}</span>
          )}
        </div>
        <Button
          type="submit"
          styles="w-full h-10 bg-btn-secondary-bg/30 text-btn-primary-text hover:bg-btn-secondary-hover/50"
        >
          Crear Tablero
        </Button>
      </form>
    </div>
  );
};

export default AddTabModal;
