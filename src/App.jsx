import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import RegisterPatient from "./components/authentication/RegisterPatient";  // Importer RegisterPatient
import DashboardAdmin from "./components/Admin/DashboardAdmin";
import DashboardDoctor from "./components/Doctor/DashboardDoctor";
import DashboardPatient from "./components/Patient/DashboardPatient";
import RegisterDoctor from "./components/Admin/DoctorRegister.jsx";
import CreateAdminUser from "./components/Admin/CreateAdmin.jsx";
import AllUsers from "./components/Admin/AllUsers.jsx";
import Specialities from "./pages/Specialities.jsx";

function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registerPatient" element={<RegisterPatient />} />
          <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
          <Route path="/dashboardDoctor" element={<DashboardDoctor />} />
          <Route path="/dashboardPatient" element={<DashboardPatient />} />
          <Route path="/admin/register-doctor" element={<RegisterDoctor />} />
          <Route path="/admin/create-admin-user" element={<CreateAdminUser />} />
          <Route path="/admin/all-users" element={<AllUsers />} />
          <Route path="/specialities" element={<Specialities />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
