import { Header } from "../components/Home";
import { Form, Input, Button } from "../components/index";
import { EyeIcon, EyeSlashIcon } from "../assets/icons";
import { useShowPasswordStore } from "../store/slices/sliceShowPassword";

const Login = () => {
  const { isVisible } = useShowPasswordStore();

  return (
    <main className="w-full h-screen overflow-x-hidden relative">
      <Header />
      <Form title="Iniciar Sesión">
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
            Iniciar Sesión
          </Button>
        </div>
      </Form>
    </main>
  );
};

export default Login;
