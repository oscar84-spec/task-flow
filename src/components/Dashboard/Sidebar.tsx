import {
  DashboardIcon,
  StarIcon,
  TeamIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  AddIcon,
} from "../../assets/icons";
import { Button } from "../index";
import { useShowModalStore } from "../../store/slices/sliceShowModal";
import { useGetBoardByIdStore } from "../../store/slices/sliceGetBoardById";
import { useState, useEffect } from "react";
import { getBoardsById } from "../../services/kanban";
import { useUserDataStore } from "../../store/slices/sliceUserData";

type SidebarDashboardProps = {
  areas: string;
};

const Sidebar = ({ areas }: SidebarDashboardProps) => {
  const { handleToggleModal } = useShowModalStore();
  const { board, setBoard } = useGetBoardByIdStore();
  const { user } = useUserDataStore();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getBoards = async () => {
      if (!user?._id) return;
      try {
        const res = await getBoardsById(user?._id);
        if (!res) {
          alert("Error al obtener tableros");
        } else {
          setBoard(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getBoards();
  }, [setBoard, handleToggleModal, user]);

  return (
    <aside
      className={`hidden w-full bg-dashboard-sidebar-bg rounded-md p-2 md:flex flex-col gap-5 ${areas}`}
    >
      <div className="w-full flex items-center gap-2 pointer-events-none">
        <DashboardIcon styles="size-5 text-icon-color" />
        <span className="text-lg text-dashboard-text-color">Tableros</span>
      </div>
      <div className="w-full flex flex-col gap-2 pl-2 lg:pl-5">
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
        >
          <StarIcon styles="size-5 text-icon-color" />
          <span className="text-sm text-dashboard-text-color">
            Tableros Destacados
          </span>
        </Button>
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
        >
          <TeamIcon styles="size-5 text-icon-color" />
          <span className="text-sm text-dashboard-text-color">
            Tableros de Equipo
          </span>
        </Button>
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ArrowDownIcon styles="size-3 text-icon-color" />
          ) : (
            <ArrowRightIcon styles="size-3 text-icon-color" />
          )}
          <span className="text-sm text-dashboard-text-color">
            Tus tableros
          </span>
        </Button>
        {isOpen && (
          <div
            className={`w-full pl-4 lg:pl-7 
           ${board?.length ?? 0 ? "h-max max-h-28 overflow-y-auto" : "h-0"} `}
          >
            {loading && (
              <span className="text-sm text-dashboard-text-color">
                Cargando...
              </span>
            )}
            {board?.map((b) => (
              <Button
                type="button"
                styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
                key={b._id}
              >
                <span className="text-sm text-dashboard-text-color">
                  {b.title}
                </span>
              </Button>
            ))}
          </div>
        )}
        <Button
          type="button"
          styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
          onClick={handleToggleModal}
        >
          <AddIcon styles="size-5 text-icon-color" />
          <span className="text-sm text-dashboard-text-color">
            Crear Tablero
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
