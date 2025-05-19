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

export const createUser = async (data: ValidationForm) => {
  return await api.post("/register", data);
};
