import api from "./http";

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

type Login = {
  email: string;
  password: string;
};

// Registro de usuarios - ✔
export const createUser = async (data: ValidationForm) => {
  return await api.post("/register", data);
};

// Verificar sesión de jwt - ✔
export const verifySession = async () => {
  try {
    const res = await api.get("/dashboard", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Inicio de sesión - ✔

export const loginUser = async (data: Login) => {
  try {
    return await api.post("/login", data, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
  }
};

// Cerrar sesión

export const logoutUser = async () => {
  try {
    return await api.post(
      "/logout",
      {},
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};
