import { Routes, Route,useLocation } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";

function App (props) {
   const location=useLocation()
  return (

      <Routes>
        <Route path="/" element={<Login location={location} />} />
      <Route path="/SignUp" element={<SignUp location={location} />} />
      <Route path="/UserProfile" element={<UserProfile location={location} />} />
      </Routes>

  );
}

export default App;
