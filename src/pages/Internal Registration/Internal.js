import InternalRegistrationPage from "../../components/Internal Registration Card/InternalRegistrationCard";
import { NavbarMain } from "../../components/Navbar/navbar";
import "./Internal.css";

function Internal() {
  return (
    <div className="font-3xl text-center font-body">
      <NavbarMain />
      <InternalRegistrationPage />
    </div>
  );
}

export default Internal;
