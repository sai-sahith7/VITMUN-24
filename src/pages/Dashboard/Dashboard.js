import HeroComponent from "../../components/Hero/hero";
import { NavbarMain } from "../../components/Navbar/navbar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="font-3xl text-center font-body">
      <NavbarMain />
      <HeroComponent />
    </div>
  );
}

export default Dashboard;
