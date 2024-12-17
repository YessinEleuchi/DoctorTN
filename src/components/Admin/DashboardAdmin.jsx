// src/components/dashboard/DashboardAdmin.jsx
import { Link } from "react-router-dom";

const DashboardAdmin = () => {
  return (
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link to="/admin/register-doctor">Register Doctor</Link>
            </li>
            <li>
              <Link to="/admin/create-admin-user">Create Admin User</Link>
            </li>
            <li>
              <Link to="/admin/all-users">All Users</Link>
            </li>
              <li>
                  <Link to="/doctors">All Doctors</Link>
              </li>
          </ul>
        </nav>
      </div>
  );
};

export default DashboardAdmin;
