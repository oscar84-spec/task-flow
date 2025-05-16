import {
  HeaderDash,
  AddTabModal,
  KanbanContent,
} from "../components/Dashboard";

import "../assets/styles/dashboard.css";

const Dashboard = () => {
  return (
    <main className="w-full h-screen bg-dashboard-page-bg ">
      <HeaderDash />
      <AddTabModal />
      <section className="w-full h-[calc(100vh-56px)] p-5 dashboard">
        <div className="hidden md:block sidebar">Sidebar</div>
        <KanbanContent areas="main" />
      </section>
    </main>
  );
};

export default Dashboard;
