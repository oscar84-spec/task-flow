import { Header } from "../components/Home";
import { Form, Input, Button } from "../components/index";
import { EyeIcon, EyeSlashIcon } from "../assets/icons";
import { useShowPasswordStore } from "../store/slices/sliceShowPassword";
import { useForm } from "react-hook-form";
import { validationsLogin } from "../validations/login";
import { loginUser } from "../services/users";
import { useNavigate } from "react-router-dom";

type FormLogin = {
  email: string;
  password: string;
};

const Login = () => {
  const { isVisible } = useShowPasswordStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormLogin>();

  const onSubmit = async (data: FormLogin) => {
    try {
      const res = await loginUser(data);
      if (!res) {
        alert("Error al iniciar sesión");
      } else {
        navigate("/dashboard");
        reset();
      }
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  return (
    <main className="w-full h-screen overflow-x-hidden relative">
      <Header />
      <Form title="Iniciar Sesión" onClick={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-2">
          <Input
            placeholder="Correo Electrónico"
            type="email"
            {...register("email", validationsLogin.email)}
          />
          {errors.email && (
            <span className="text-sm text-red-500 ">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-2 relative">
          <Input
            placeholder="Cotraseña"
            type={isVisible ? "text" : "password"}
            {...register("password", validationsLogin.password)}
          />
          {errors.password && (
            <span className="text-sm text-red-500 ">
              {errors.password.message}
            </span>
          )}
          {isVisible ? (
            <EyeSlashIcon
              styles={`absolute top-1/2 right-3 -translate-y-1/2 text-icon-color cursor-pointer ${
                errors.password ? "top-[30%] " : ""
              } `}
            />
          ) : (
            <EyeIcon
              styles={`absolute top-1/2 right-3 -translate-y-1/2 text-icon-color cursor-pointer ${
                errors.password ? "top-[30%] " : ""
              } `}
            />
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
