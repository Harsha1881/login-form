import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login-page/Login";
import Signup from "./components/signup-page/Signup";
import Success from "./components/success-page/Success";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
