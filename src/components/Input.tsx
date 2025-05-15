import { forwardRef } from "react";

type InputProps = {
  placeholder: string;
  type: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="outline-none border-1 border-btn-primary-bg w-full h-10 rounded-md px-3"
        {...rest}
      />
    );
  }
);

export default Input;
