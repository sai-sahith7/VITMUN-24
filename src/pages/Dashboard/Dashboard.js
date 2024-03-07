import { useState } from "react";
import HeroComponent from "../../components/Hero/hero";
import { NavbarMain } from "../../components/Navbar/navbar";
import Popup from "../../components/Popup Card/Popup";
import "./Dashboard.css";

function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);

  function toggleShowPopup() {
    setShowPopup(!showPopup);
  }

  return (
    <div className="font-3xl text-center font-body">
      <NavbarMain />
      <HeroComponent toggleShowPopup={toggleShowPopup} />
      {showPopup ? <Popup toggleShowPopup={toggleShowPopup} /> : null}
    </div>
  );
}

export default Dashboard;
