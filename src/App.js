import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Internal from "./pages/Internal Registration/Internal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/internal" element={<Internal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
