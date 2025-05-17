import { Button } from "../index";
import "../../assets/styles/kanban.css";

type KanbanContentProps = {
  areas?: string;
};

const KanbanContent = ({ areas }: KanbanContentProps) => {
  return (
    <section
      className={`w-full h-full bg-dashboard-kanban-bg rounded-md p-2 flex flex-col gap-2 overflow-hidden ${areas} `}
    >
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xl text-dashboard-text-color font-medium">
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
          <h3 className="text-md text-dashboard-text-color nombre">
            Nombre de la Lista
          </h3>
          <div className="overflow-y-auto lista">
            {/* -------------------------- TARJETAS -------------------------- */}
          </div>
          <Button type="button" styles="w-full button-add">
            Agregar tarjeta
          </Button>
        </div>
        <Button type="button" styles="w-full shrink-0 md:w-68">
          Agregar lista
        </Button>
      </section>
    </section>
  );
};

export default KanbanContent;
