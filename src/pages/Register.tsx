import { Header } from "../components/Home";
import { Form, Input, Button } from "../components/index";
import { EyeIcon, EyeSlashIcon } from "../assets/icons";
import { useShowPasswordStore } from "../store/slices/sliceShowPassword";

const Register = () => {
  const { isVisible } = useShowPasswordStore();

  return (
    <main className="w-full h-screen bg-page-bg overflow-x-hidden relative">
      <Header />
      <Form title="Registro">
        <div className="w-full flex flex-col gap-2">
          <Input placeholder="Nombre" type="text" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input placeholder="Apellido" type="text" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input placeholder="Correo Electrónico" type="email" />
        </div>
        <div className="w-full flex flex-col gap-2 relative">
          <Input
            placeholder="Cotraseña"
            type={isVisible ? "text" : "password"}
          />
          {isVisible ? (
            <EyeSlashIcon styles="absolute top-1/2 right-3 -translate-y-1/2 text-icon-color cursor-pointer" />
          ) : (
            <EyeIcon styles="absolute top-1/2 right-3 -translate-y-1/2 text-icon-color cursor-pointer" />
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Button type="submit" styles="w-full h-10">
            Registrarme
          </Button>
        </div>
      </Form>
    </main>
  );
};

export default Register;
