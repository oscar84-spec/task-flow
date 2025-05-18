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

type SidebarDashboardProps = {
  areas: string;
};

const Sidebar = ({ areas }: SidebarDashboardProps) => {
  const { handleToggleModal } = useShowModalStore();

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
        >
          <ArrowDownIcon styles="size-3 text-icon-color" />
          <span className="text-sm text-dashboard-text-color">
            Tus tableros
          </span>
        </Button>
        <div className="w-full pl-4 lg:pl-7">
          <Button
            type="button"
            styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
          >
            <span className="text-sm text-dashboard-text-color">
              Campaña de Marketing
            </span>
          </Button>
          <Button
            type="button"
            styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
          >
            <span className="text-sm text-dashboard-text-color">
              Plan de Producto
            </span>
          </Button>
          <Button
            type="button"
            styles="w-full h-10 pl-2 bg-transparent flex items-center justify-start gap-2 hover:bg-dashboard-sidebar-hover-bg"
          >
            <span className="text-sm text-dashboard-text-color">
              Rediseño de Sitio Web
            </span>
          </Button>
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
      </div>
    </aside>
  );
};

export default Sidebar;
