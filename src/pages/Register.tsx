import { Header } from "../components/Home";
import { Form, Input, Button } from "../components/index";
import { EyeIcon, EyeSlashIcon } from "../assets/icons";
import { useShowPasswordStore } from "../store/slices/sliceShowPassword";
import { useForm } from "react-hook-form";
import { validationsRegister } from "../validations/register";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/users";

type ValidationForm = {
  name: {
    required: {
      value: boolean;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
    maxLength: {
      value: number;
      message: string;
    };
  };
  lastName?: {
    minLength: {
      value: number;
      message: string;
    };
    maxLength: {
      value: number;
      message: string;
    };
  };
  email: {
    required: {
      value: boolean;
      messague: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };
  password: {
    required: {
      value: boolean;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
    maxLength: {
      value: number;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };
};

const Register = () => {
  const { isVisible } = useShowPasswordStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationForm>();

  const onSubmit = async (data: ValidationForm) => {
    const res = await createUser(data);
    if (!res) {
      alert("Error al registrar usuario");
    } else {
      navigate("/dashboard");
      reset();
    }
  };

  return (
    <main className="w-full h-screen bg-page-bg overflow-x-hidden relative">
      <Header />
      <Form title="Registro" onClick={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-2">
          <Input
            placeholder="Nombre"
            type="text"
            {...register("name", validationsRegister.name)}
          />
          {errors.name && (
            <span className="text-sm text-red-500 ">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            placeholder="Apellido"
            type="text"
            {...register("lastName", validationsRegister.lastName)}
          />
          {errors.lastName && (
            <span className="text-sm text-red-500 ">
              {errors.lastName.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Input
            placeholder="Correo Electrónico"
            type="email"
            {...register("email", validationsRegister.email)}
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
            {...register("password", validationsRegister.password)}
          />
          {errors.password && (
            <span className="text-sm text-red-500 ">
              {errors.password.message}
            </span>
          )}
          {isVisible ? (
            <EyeSlashIcon
              styles={`absolute top-1/2 right-3 -translate-y-1/2 text-icon-color cursor-pointer ${
                errors.password ? "top-[30%]" : ""
              } `}
            />
          ) : (
            <EyeIcon
              styles={`absolute top-1/2 right-3 -translate-y-1/2 text-icon-color cursor-pointer ${
                errors.password ? "top-[30%]" : ""
              } `}
            />
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
