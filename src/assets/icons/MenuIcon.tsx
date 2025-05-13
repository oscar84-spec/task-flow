import "../styles/header.css";
import { useSidebarStore } from "../../store/slices/sliceSidebar";

const MenuIcon = () => {
  const { isOpen, handleToggleSidebar } = useSidebarStore();

  return (
    <div
      className={`menu-icon md:hidden ${isOpen ? "active" : ""} `}
      onClick={handleToggleSidebar}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default MenuIcon;
