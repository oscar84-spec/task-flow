import { KanbanIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

type LogoProps = {
  stylesIcon?: string;
  stylesText?: string;
};

const Logo = ({ stylesIcon, stylesText }: LogoProps) => {
  return (
    <div className="w-max">
      <Link to="/" className="flex items-center gap-2">
        <KanbanIcon styles={stylesIcon} />
        <span className={`text-xl text-stone-50 font-medium ${stylesText} `}>
          TaskFlow
        </span>
      </Link>
    </div>
  );
};

export default Logo;
