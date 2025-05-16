import { HeaderDash, AddTabModal } from "../components/Dashboard";

const Dashboard = () => {
  return (
    <main className="w-full h-screen bg-dashboard-page-bg ">
      <HeaderDash />
      <AddTabModal />
    </main>
  );
};

export default Dashboard;
