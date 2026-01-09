import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Heder from "./component/header/headers";
import Footercomponenet from "./component/footer/Footer";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";
import Login from "./pages/Login/login";
import Admindashboard from "./pages/Admindashboard/admindashboardorignel";
import Teacherdashboard from "./pages/teacher/teacherdashboard";
import Subject from "./pages/Subjects/subject";
import Coures from "./pages/coures/coures";

function App() {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const isLoggedIn = !!currentUser;

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    );
  }

  return (
    <>
      {!["/admindashboard", "/teacherdashboard"].includes(location.pathname) && (
        <Heder />
      )}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/course" element={<Coures />} />

        {currentUser.role === 1 && (
          <Route path="/admindashboard" element={<Admindashboard />} />
        )}

        {currentUser.role === 2 && (
          <Route path="/teacherdashboard" element={<Teacherdashboard />} />
        )}

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      <Footercomponenet />
    </>
  );
}

export default App;