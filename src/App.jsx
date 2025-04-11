import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import ResetPassword from "./pages/Reset-Password";
import AdminPage from "./pages/AdminPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import AccessControlPage from "./pages/Access-Control-Page";

function App() {

  return (

    
    <Routes>

      <Route path="/" element={<Login />} /> 

      <Route path="/SignUp" element={<SignUp />} />

      <Route path="/ResetPassword" element={<ResetPassword />} />

      <Route path="/Admin" element={<AdminPage />} />



    </Routes>


    
  );
}

export default App;
