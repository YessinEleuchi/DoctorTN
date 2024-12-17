import { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { FaUserMd, FaUsers } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { getAllUsers, searchDoctors } from "../services/Service"; // Import services
import Loading from "./Loading"; // Correctly importing Loading
import "../styles/Home.css";

const Home = () => {
    const [userCount, setUserCount] = useState(0);
    const [appointmentCount, setAppointmentCount] = useState(0);
    const [doctorCount, setDoctorCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // Use local state for loading

    const fetchDataCounts = async () => {
        setIsLoading(true); // Start loading
        try {
            // Fetch users
            const usersResponse = await getAllUsers();
            setUserCount(usersResponse.data.totalCount || usersResponse.data.length);

            // Fetch doctors
            const doctorsResponse = await searchDoctors(""); // Empty criteria for all doctors
            setDoctorCount(doctorsResponse.data.totalCount || doctorsResponse.data.length);

            // Simulate appointments data
            const appointmentsMock = [
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]; // Replace with actual API call if available
            setAppointmentCount(appointmentsMock.length);
        } catch (error) {
            console.error("Error fetching data counts:", error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        fetchDataCounts();
    }, []);

    const data = [
        { name: "User Count", count: userCount },
        { name: "Appointment Count", count: appointmentCount },
        { name: "Doctor Count", count: doctorCount },
    ];

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="user-section">
                    <div>
                        <h1>Welcome To Dashboard!!!</h1>
                        <div className="main-cards">
                            <div className="card">
                                <div className="card-inner">
                                    <h3 style={{ color: "white" }}>USERS</h3>
                                    <FaUsers />
                                </div>
                                <h2 style={{ color: "white" }}>{userCount}</h2>
                            </div>
                            <div className="card">
                                <div className="card-inner">
                                    <h3 style={{ color: "white" }}>APPOINTMENTS</h3>
                                    <BsFillGrid3X3GapFill className="card_icon" />
                                </div>
                                <h2 style={{ color: "white" }}>{appointmentCount}</h2>
                            </div>
                            <div className="card">
                                <div className="card-inner">
                                    <h3 style={{ color: "white" }}>DOCTORS</h3>
                                    <FaUserMd />
                                </div>
                                <h2 style={{ color: "white" }}>{doctorCount}</h2>
                            </div>
                        </div>
                        <div className="charts">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="count" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Home;
