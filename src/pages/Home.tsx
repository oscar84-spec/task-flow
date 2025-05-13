import { Header, Presentation } from "../components/Home";
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
    </main>
  );
};

export default Home;
