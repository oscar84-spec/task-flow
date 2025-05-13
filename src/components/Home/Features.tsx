import { SectionLayaout } from "../index";
import { ListIcon, TeamIcon, CalendarIcon } from "../../assets/icons";

type Cards = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Features = () => {
  const cards: Cards[] = [
    {
      icon: <ListIcon />,
      title: "Tableros y Listas",
      description:
        "Organiza el trabajo con tableros, listas y tarjetas. Añade detalles, fechas límite y archivos adjuntos.",
    },
    {
      icon: <TeamIcon />,
      title: "Colaboración en Equipo",
      description:
        "Trabaja en tiempo real con los miembros de tu equipo en cualquier proyecto.",
    },
    {
      icon: <CalendarIcon />,
      title: "Vista de Calendario",
      description:
        "Visualiza tus tareas y fechas límite en un formato de calendario claro.",
    },
  ];

  return (
    <SectionLayaout styles="flex flex-col gap-10 py-20 lg:px-10 xl:px-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-text-color font-medium text-center text-pretty md:text-4xl lg:text-5xl">
          Funciones para ayudar a tu equipo a triunfar
        </h2>
        <span className="text-md text-text-color/60 font-medium text-center text-pretty md:text-lg lg:text-xl lg:font-normal">
          Gestión de proyectos potente, flexible y sencilla.
        </span>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        {cards.map((card, index) => (
          <div
            className="flex flex-col gap-2 p-5 border-1 border-text-color/30 rounded-md md:flex-1"
            key={index}
          >
            {card.icon}
            <h3 className="text-xl text-text-color font-medium">
              {card.title}
            </h3>
            <p className="text-md text-text-color/75 text-pretty">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </SectionLayaout>
  );
};

export default Features;
