
import { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import "./App.css";

import Heder from "./component/header/headers";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";
import Login from "./pages/Login/login";
import Admindashboard from "./pages/Admindashboard/admindashboardorignel";
import Footercomponenet from "./component/footer/Footer";
import Subject from "./pages/Subjects/subject";
import Coures from "./pages/coures/coures";
import Teacherdashboard from "./pages/teacher/teacherdashboard";

function App() {
  const [count, setCount] = useState(0);

  const signup = JSON.parse(localStorage.getItem("signupdata")) || {};
  const Logins =
    JSON.parse(localStorage.getItem("login")) ||
    JSON.parse(localStorage.getItem("Login"));

  const location = useLocation();

  if (Logins) {
    return (
      <>
        {/* Show header/footer everywhere except on admindashboard */}
        {location.pathname !== "/admindashboard" &&
 location.pathname !== "/subject" && 
 location.pathname !== "/course" &&
 location.pathname !== "/teacherdashboard" && (
  <>
    <Heder />
  </>
)}


        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/course" element={<Coures />} />
          {/* Only show admin dashboard if role is not "1" */}
          {signup?.role === 1 && (
            <Route path="/admindashboard" element={<Admindashboard />} />
          )}
          {signup?.role === 2 && (
            <Route path="/teacherdashboard" element={<Teacherdashboard />} />
          )}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </>
  );
}

export default App;



