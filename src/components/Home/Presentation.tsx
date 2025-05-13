import { SectionLayaout, Button } from "../index";

const Presentation = () => {
  return (
    <SectionLayaout styles="flex flex-col gap-10 pt-20 lg:flex-row lg:items-center lg:h-[calc(100vh-56px)] lg:px-10 xl:px-20">
      <div className="flex flex-col gap-5 lg:w-1/2">
        <h1 className="text-4xl text-text-color font-bold md:text-5xl lg:text-6xl">
          Organiza todo, juntos
        </h1>
        <p className="text-md text-text-color/60 font-medium text-pretty md:text-lg lg:text-xl">
          Reúne el trabajo de tu equipo en un espacio compartido. Desde grandes
          empresas hasta oficinas en casa, la forma en que tu equipo trabaja es
          única.
        </p>
        <div className="flex flex-col gap-2 md:flex-row">
          <Button
            type="button"
            styles="w-full h-10 hover:bg-btn-primary-hover cursor-pointer md:w-34"
          >
            Empezar gratis
          </Button>
          <Button
            type="button"
            styles="w-full h-10 bg-btn-secondary-bg text-btn-secondary-text hover:bg-btn-secondary-hover cursor-pointer md:w-34"
          >
            Saber más
          </Button>
        </div>
      </div>
      {/*Imagén de muestra */}
      <img
        src="/TaskFlowDemo.webp"
        alt="TaskFlow demo"
        className="w-full rounded-md md:w-3/4 lg:w-1/2"
      />
    </SectionLayaout>
  );
};

export default Presentation;
