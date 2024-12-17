import { useState } from "react";
import AdminDoctors from "../components/AdminDoctors";
import Sidebar from "../components/Sidebar";
import Users from "../components/AllUsers";
import Home from "./Home.jsx";

const Dashboard = (props) => {
    const [adminContent, setAdminContent] = useState(null); // État pour gérer le contenu admin
    const { type } = props;

    const renderAdminContent = () => {
        switch (adminContent) {
            case "register-doctor":
                return <div>Register Doctor Content</div>;
            case "create-admin-user":
                return <div>Create Admin User Content</div>;
            case "all-users":
                return <Users />;
            case "all-doctors":
                return <AdminDoctors />;
            default:
                return <div>Select an option from the admin menu.</div>;
        }
    };

    return (
        <section className="layout-section">
            <div className="layout-container">
                <Sidebar />
                {type === "home" ? (
                    <Home />
                ) : type === "users" ? (
                    <Users />
                ) : type === "doctors" ? (
                    <AdminDoctors />
                ) : type === "admin" ? (
                    <div className="dashboard-container">
                        <h1>Admin Dashboard</h1>
                        <nav>
                            <ul>
                                <li>
                                    <button onClick={() => setAdminContent("register-doctor")}>
                                        Register Doctor
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setAdminContent("create-admin-user")}>
                                        Create Admin User
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setAdminContent("all-users")}>
                                        All Users
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setAdminContent("all-doctors")}>
                                        All Doctors
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <div className="admin-content">{renderAdminContent()}</div>
                    </div>
                ) : (
                    // Contenu statique stylisé pour un admin
                    <div className="static-admin-content">
                        <h2>Welcome to the Admin Dashboard</h2>
                        <p>
                            Use the sidebar to navigate through the available sections, or choose one of
                            the options to get started with managing your platform.
                        </p>
                        <ul>
                            <li>Monitor platform statistics</li>
                            <li>Manage users and roles</li>
                            <li>Oversee system configurations</li>
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Dashboard;
