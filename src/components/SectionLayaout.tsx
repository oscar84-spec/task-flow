type SectionLayaoutProps = {
  children: React.ReactNode;
  styles?: string;
};

const SectionLayaout = ({ children, styles }: SectionLayaoutProps) => {
  return (
    <section className={`w-full bg-page-bg px-5 lg:px-10 xl:px20 ${styles} `}>
      {children}
    </section>
  );
};

export default SectionLayaout;
