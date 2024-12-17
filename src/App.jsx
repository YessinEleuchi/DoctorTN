import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import RegisterPatient from "./pages/RegisterPatient.jsx";  // Importer RegisterPatient
import DashboardDoctor from "./pages/DashboardDoctor.jsx";
import RegisterDoctor from "./components/Admin/DoctorRegister.jsx";
import CreateAdminUser from "./components/Admin/CreateAdmin.jsx";
import AllUsers from "./components/AllUsers.jsx";
import Specialities from "./pages/Specialities.jsx";
import AboutUs from "./components/AboutUs.jsx";
import AdminDoctors from "./components/AdminDoctors.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import HomeAdmin from "./components/Home.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPatient />} />
          <Route path="/dashboardAdmin" element={<Dashboard />} />
          <Route path="/dashboardDoctor" element={<DashboardDoctor />} />
          <Route path="/admin/register-doctor" element={<RegisterDoctor />} />
          <Route path="/admin/create-admin-user" element={<CreateAdminUser />} />
          <Route path="/dashboard/AllUsers" element={<AllUsers />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/aboutus" element={<AboutUs />} />
         < Route path="/dashboard/doctors" element={<AdminDoctors />} />
          <Route path="/dashboard/home" element={<HomeAdmin />} />


        </Routes>
      </Router>

    </>
  )
}

export default App
