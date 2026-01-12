import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Heder from "./component/header/headers";
import Footercomponenet from "./component/footer/Footer";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";

import Admindashboard from "./pages/Admindashboard/admindashboardorignel";
import Teacherdashboard from "./pages/teacher/teacherdashboard";
import Subject from "./pages/Subjects/subject";
import Coures from "./pages/coures/coures";
//import ProtectedRoute from "./protected Route/protectRoute";
function App() {
  const location = useLocation();
  
   

  return (
    <>
    <Heder />
      <Routes>
          <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/course" element={<Coures />} />
 <Route
  path="/admindashboard"
  element={
  
      <Admindashboard />
   
  }
/>
      
      </Routes>

      <Footercomponenet />
    </>
  );
}

export default App;