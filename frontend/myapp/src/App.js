import Navbarr from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
