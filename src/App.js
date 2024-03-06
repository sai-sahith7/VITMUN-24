//import logo from './logo.svg';
import { NavbarMain } from "./components/Navbar/navbar";
import "./App.css";
import HeroComponent from "./components/Hero/hero";

function App() {
  return (
    <div className="font-3xl text-center font-body">
      <NavbarMain />
      <HeroComponent />
    </div>
  );
}

export default App;
