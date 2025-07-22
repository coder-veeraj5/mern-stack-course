import Login from "./pages/auth/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

import Birthday from "./pages/auth/Birthday";
import ResetPassword from "./pages/auth/ResetPassword";
import Verify from "./pages/auth/Verify";
import Logout from "./pages/auth/Logout";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

function App() {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
    <Route path="/birthday" element={<Birthday/>}/>
    <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
