// src/components/authentication/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/Service.js";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
