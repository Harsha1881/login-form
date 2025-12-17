import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login-page/Login";
import Success from "./components/success-page/Success";
import Home from "./components/home-page/Home";
import Signup from "./components/signup-page/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
