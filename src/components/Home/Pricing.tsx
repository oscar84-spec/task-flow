import { SectionLayaout, Button } from "../index";
import { CheckIcon } from "../../assets/icons";

type Plan = {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
};

const Pricing = () => {
  const plans: Plan[] = [
    {
      icon: <CheckIcon />,
      title: "Gratis",
      description: "Para individuos o equipos pequeños que están comenzando",
      price: "0",
      features: [
        "Tableros Ilimitados",
        "Hasta 10 miembros",
        "Automatizaciones básicas",
      ],
      buttonText: "Comenzar",
    },
    {
      icon: <CheckIcon />,
      title: "Pro",
      description: "Para equipos en crecimiento que necesitan más funciones",
      price: "10",
      features: [
        "Todo lo de Gratis",
        "Miembros ilimitados",
        "Automatizaciones avanzadas",
        "Controles de administrador",
      ],
      buttonText: "Prueba gratis",
    },
    {
      icon: <CheckIcon />,
      title: "Empresa",
      description:
        "Para organizaciones que necesitan seguridad y soporte adicional",
      price: "30",
      features: [
        "Todo lo de Pro",
        "Seguridad nivel empresarial",
        "Soporte prioritario",
        "Integraciones personalizadas",
      ],
      buttonText: "Contactar ventas",
    },
  ];

  return (
    <SectionLayaout styles="flex flex-col gap-10 bg-btn-primary-bg py-20 lg:px-10 xl:px-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-text-light font-medium text-center text-pretty md:text-4xl lg:text-5xl">
          Elige el plan perfecto para ti
        </h2>
        <span className="text-md text-text-light/80 text-center text-pretty md:text-lg lg:text-xl">
          Ya seas un equipo pequeño o una gran organización, tenemos un plan que
          se adapta a tus necesidades.
        </span>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between ">
        {plans.map((plan, index) => (
          <div
            className="flex flex-col gap-2 p-5 rounded-md bg-page-bg md:flex-1 md:gap-3"
            key={index}
          >
            <h3 className="text-xl text-text-color font-bold md:text-3xl">
              {plan.title}
            </h3>
            <p className="text-sm text-text-color/60 text-pretty md:text-lg">
              {plan.description}
            </p>
            <span className="text-xl text-text-color font-bold md:text-3xl">
              ${plan.price}
            </span>
            <ul className="flex flex-col gap-2">
              {plan.features.map((feature, index) => (
                <li
                  className="flex items-center gap-3 text-md text-text-color text-pretty md:text-lg"
                  key={index}
                >
                  {plan.icon} {feature}
                </li>
              ))}
            </ul>
            <Button type="button" styles="w-full h-10">
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </SectionLayaout>
  );
};

export default Pricing;
