import { Header, Presentation, Features } from "../components/Home";
import { useSidebarStore } from "../store/slices/sliceSidebar";

const Home = () => {
  const { isOpen } = useSidebarStore();
  return (
    <main
      className={`w-full h-screen overflow-x-hidden ${
        isOpen ? "overflow-y-hidden" : ""
      } `}
    >
      <Header />
      <Presentation />
      <Features />
    </main>
  );
};

export default Home;
