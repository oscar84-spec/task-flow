import { Button, Badge } from "../index";
import { DeleteIcon } from "../../assets/icons";
import "../../assets/styles/kanban.css";
import { useShowAddListStore } from "../../store/slices/sliceShowAddList";

type KanbanContentProps = {
  areas?: string;
};

const KanbanContent = ({ areas }: KanbanContentProps) => {
  const { handleToggleAddList } = useShowAddListStore();
  return (
    <section
      className={`w-full h-full bg-dashboard-kanban-bg rounded-md p-2 flex flex-col gap-2 overflow-hidden ${areas} `}
    >
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xl text-dashboard-text-color font-medium pointer-events-none">
          Nombre del Tablero
        </h3>
        <div className="flex  gap-2 items-center">
          <Button type="button" styles="w-max px-2">
            Compartir
          </Button>
          <Button type="button" styles="w-max px-2">
            ...
          </Button>
        </div>
      </div>
      {/* -------------------------- KANBAN -------------------------- */}

      <section className="w-full h-full p-2 flex gap-5 overflow-x-auto">
        {/* -------------------------- LISTAS -------------------------- */}
        <div className="w-full shrink-0 rounded-md p-2 bg-dashboard-list-bg md:w-72 lista-container">
          <h3 className="text-md text-dashboard-text-color nombre pointer-events-none">
            Nombre de la Lista
          </h3>
          <div className="overflow-y-auto lista flex flex-col gap-2">
            {/* -------------------------- TARJETAS -------------------------- */}
            <div className="w-full shrink-0 rounded-md p-2 bg-dashboard-card-bg  flex flex-col gap-2">
              <div className="w-full flex justify-between items-center gap-2">
                <Badge priority="Normal">Urgente</Badge>
                <DeleteIcon styles="text-dashboard-text-color size-7 border-dashboard-text-color border-1 rounded-full transition-colors ease-in-out duration-300 cursor-pointer hover:text-red-500 hover:border-red-500" />
              </div>
              <h3 className="text-md text-dashboard-text-color font-medium pointer-events-none">
                Nombre de la tarjeta
              </h3>
              <p className="text-sm text-dashboard-text-color/50 text-pretty">
                Descripción
              </p>
            </div>
          </div>
          <Button type="button" styles="w-full button-add">
            Agregar tarjeta
          </Button>
        </div>
        <Button
          type="button"
          styles="w-full shrink-0 md:w-68"
          onClick={handleToggleAddList}
        >
          Agregar lista
        </Button>
      </section>
    </section>
  );
};

export default KanbanContent;
