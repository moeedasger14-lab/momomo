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
  
  const user = JSON.parse(localStorage.getItem("authUser"));
 const location = useLocation();
  const navigate = useNavigate();

  // 🔁 Poll approval
  useEffect(() => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user || user.status === "approved") return;

  const interval = setInterval(async () => {
    const res = await fetch(
      `http://localhost:60977/api/admin/users/status/${user.id}`
    );

    if (!res.ok) return;

    const data = await res.json();

    if (data.status === "approved") {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...user, status: "approved" })
      );

      clearInterval(interval);

      if (data.role === "teacher") {
        window.location.href = "/teacher-dashboard";
      } else if (data.role === "student") {
        window.location.href = "/student-dashboard";
      }
    }
  }, 3000);

  return () => clearInterval(interval);
}, []);

  // Hide header/footer ONLY on signup
  const hideLayout = location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Heder />}

      <Routes>
        {/* Signup */}
        <Route
  path="/signup"
  element={
     JSON.parse(localStorage.getItem("currentUser")) ? (
      <Navigate to="/home" />
    ) : (
      <Signup />
    )
    
  }
/>
        {/* Home (students) */}
        <Route
          path="/home"
          element={
          
              <Home />
           
          }
        />

        {/* Teacher dashboard */}
        <Route
          path="/teacherdashboard"
          element={
            <ProtectedRoute    allowedRoles={["teacher"]}>
              <Teacherdashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin dashboard */}
        <Route
          path="/admindashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Admindashboard />
            </ProtectedRoute>
          }
        />

        {/* Common routes */}
        <Route
          path="/subject"
          element={
          <Subject />
          
          }
        />

        <Route
          path="/course"
          element={
            
              <Coures />
           
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>

      {!hideLayout && <Footercomponenet />}
    </>
  );
}


export default App;