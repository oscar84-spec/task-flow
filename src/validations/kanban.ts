type Board = {
  title: {
    required: {
      value: boolean;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
  };
};

type List = {
  title: {
    required: {
      value: boolean;
      message: string;
    };
  };
};

export const validateBoard: Board = {
  title: {
    required: {
      value: true,
      message: "El nombre no puede estar vacío",
    },
    minLength: {
      value: 3,
      message: "El nombre debe tener al menos 3 caracteres",
    },
  },
};

export const valudateList: List = {
  title: {
    required: {
      value: true,
      message: "El nombre no puede estar vacío",
    },
  },
};
