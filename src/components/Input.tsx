type InputProps = {
  placeholder: string;
  type: string;
};

const Input = ({ placeholder, type }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none border-1 border-btn-primary-bg w-full h-10 rounded-md px-3"
    />
  );
};

export default Input;
