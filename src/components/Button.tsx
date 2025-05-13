type ButtonProps = {
  styles?: string;
  type: "button" | "submit";
  children: React.ReactNode;
};

const Button = ({ styles, type, children }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`w-30 h-8 bg-btn-primary-bg text-btn-primary-text rounded-md cursor-pointer hover:bg-btn-primary-hover transition-colors ease-in-out duration-300 ${styles} `}
    >
      {children}
    </button>
  );
};

export default Button;
