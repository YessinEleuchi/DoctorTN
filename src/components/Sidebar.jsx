import {
    FaHome,
    FaList,
    FaUser,
    FaUserMd,
    FaUsers,

    FaEnvelope,
} from "react-icons/fa";
import "../styles/sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
    const navigate = useNavigate();

    const sidebar = [
        {
            name: "Home",
            path: "/dashboard/home",
            icon: <FaHome />,
        },
        {
            name: "Users",
            path: "/dashboard/AllUsers",
            icon: <FaUsers />,
        },
        {
            name: "Doctors",
            path: "/dashboard/doctors",
            icon: <FaUserMd />,
        },
        {
            name: "Appointments",
            path: "/dashboard/appointments",
            icon: <FaList />,
        },
        {
            name: "Applications",
            path: "/dashboard/applications",
            icon: <FaEnvelope />,
        },
        {
            name: "Profile",
            path: "/dashboard/aprofile",
            icon: <FaUser />,
        },
        {
            name : "Register doctor",
            path : "/admin/register-doctor",
            icon : <FaUser />
        }
    ];

    const logoutFunc = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>
            <section className="sidebar-section flex-center">
                <div className="sidebar-container">
                    <ul>
                        {sidebar.map((ele, i) => {
                            return (
                                <li key={i}>
                                    {ele.icon}
                                    <NavLink to={ele.path}>{ele.name}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="logout-container">
                        <MdLogout />
                        <p onClick={logoutFunc}>Logout</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sidebar;
