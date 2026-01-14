import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Heder from "./component/header/headers";
import Footercomponenet from "./component/footer/Footer";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";

import Admindashboard from "./pages/Admindashboard/admindashboardorignel";
import Teacherdashboard from "./pages/teacher/teacherdashboard";
import Subject from "./pages/Subjects/subject";
import Coures from "./pages/coures/coures";
import ProtectedRoute from "./protected Route/protectRoute";
import { useEffect } from "react";
 
function App() {
  
  
 const location = useLocation();
  const navigate = useNavigate();



  // Hide header/footer ONLY on signup
  const hideLayout = location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Heder />}

      <Routes>

  {/* SIGNUP */}
  <Route
    path="/signup"
    element={
      JSON.parse(localStorage.getItem("currentUser"))
        ? <Navigate to="/home" replace />
        : <Signup />
    }
  />

  {/* HOME (everyone who signed up) */}
  <Route path="/home" element={<Home />} />

  {/* ADMIN */}
  <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
    <Route path="/admindashboard" element={<Admindashboard />} />
  </Route>

  {/* TEACHER */}
  <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
    <Route path="/teacherdashboard" element={<Teacherdashboard />} />
  </Route>



  {/* BLOCK EVERYTHING ELSE */}
  <Route path="*" element={<Navigate to="/signup" replace />} />

</Routes>

      {!hideLayout && <Footercomponenet />}
    </>
  );
}


export default App;