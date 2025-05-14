type FormProps = {
  children: React.ReactNode;
  title: string;
};

const Form = ({ children, title }: FormProps) => {
  return (
    <section className="z-0 w-full h-[calc(100vh-56px)] py-5 flex justify-center">
      <form className="w-full h-max md:max-w-md md:shadow-xl p-5 mt-10 rounded-md">
        <legend className="text-2xl text-center text-text-color font-medium">
          {title}
        </legend>
        <fieldset className="mt-10 flex flex-col gap-5 items-center">
          {children}
        </fieldset>
      </form>
    </section>
  );
};

export default Form;
