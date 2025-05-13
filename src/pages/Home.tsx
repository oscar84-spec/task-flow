import {
  Header,
  Presentation,
  Features,
  Pricing,
  Footer,
} from "../components/Home";
import { useSidebarStore } from "../store/slices/sliceSidebar";

const Home = () => {
  const { isOpen } = useSidebarStore();
  return (
    <main
      className={`w-full h-screen bg-page-bg relative overflow-x-hidden ${
        isOpen ? "overflow-y-hidden" : ""
      } `}
    >
      <Header />
      <Presentation />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Home;
