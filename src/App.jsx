import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import RegisterPatient from "./pages/RegisterPatient.jsx";  // Importer RegisterPatient
import DashboardAdmin from "./components/Admin/DashboardAdmin";
import DashboardDoctor from "./pages/DashboardDoctor.jsx";
import RegisterDoctor from "./components/Admin/DoctorRegister.jsx";
import CreateAdminUser from "./components/Admin/CreateAdmin.jsx";
import AllUsers from "./components/Admin/AllUsers.jsx";
import Specialities from "./pages/Specialities.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import AdminDoctors from "./components/AdminDoctors.jsx";

function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registerPatient" element={<RegisterPatient />} />
          <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
          <Route path="/dashboardDoctor" element={<DashboardDoctor />} />
          <Route path="/admin/register-doctor" element={<RegisterDoctor />} />
          <Route path="/admin/create-admin-user" element={<CreateAdminUser />} />
          <Route path="/admin/all-users" element={<AllUsers />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/aboutus" element={<AboutUs />} />
         < Route path="/doctors" element={<AdminDoctors />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
