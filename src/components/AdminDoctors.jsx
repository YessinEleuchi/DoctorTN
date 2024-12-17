import { useState, useEffect } from "react";
import { getAllDoctors, deleteUser } from "../services/Doctor.js";
import toast from "react-hot-toast";
import Loading from "./Loading";
import Empty from "./Empty";
import "../styles/user.css";


const AdminDoctors = () => {
    const [doctors, setDoctors] = useState([]); // Liste des docteurs
    const [loading, setLoading] = useState(true); // État de chargement
    const [searchTerm, setSearchTerm] = useState(""); // Terme de recherche

    // Récupérer tous les docteurs
    const fetchAllDoctors = async () => {
        setLoading(true);
        try {
            const response = await getAllDoctors();
            console.log("Doctors data:", response.data); // Debug des données reçues
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
            toast.error("Failed to load doctors.");
        } finally {
            setLoading(false);
        }
    };

    // Supprimer un docteur
    const handleDeleteDoctor = async (username) => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete doctor "${username}"?`
        );
        if (confirmDelete) {
            try {
                await toast.promise(deleteUser(username), {
                    loading: "Deleting doctor...",
                    success: `Doctor "${username}" deleted successfully!`,
                    error: "Failed to delete doctor.",
                });
                fetchAllDoctors(); // Recharger la liste après suppression
            } catch (error) {
                console.error("Error deleting doctor:", error);
            }
        }
    };

    // Filtrer les docteurs par recherche
    const filteredDoctors = doctors.filter((doc) => {
        const firstName = doc.firstName || "";
        const lastName = doc.lastName || "";
        const speciality = doc.speciality || "";
        return (
            firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            speciality.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    useEffect(() => {
        fetchAllDoctors();
    }, []);

    return (
        <section className="user-section">
            <div className="header">
                <h3 className="home-sub-heading">All Doctors</h3>
                <input
                    type="text"
                    placeholder="Search by name or speciality..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input"
                />
            </div>

            {loading ? (
                <Loading />
            ) : filteredDoctors.length > 0 ? (
                <div className="user-container">
                    <table>
                        <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Speciality</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredDoctors.map((doctor, index) => (
                            <tr key={doctor.id || index}>
                                <td>{index + 1}</td>
                                <td>{doctor.userName}</td>
                                <td>{doctor.firstName}</td>
                                <td>{doctor.lastName}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.phoneNumber}</td>
                                <td>{doctor.speciality}</td>
                                <td>{doctor.adress}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteDoctor(doctor.userName)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <Empty />
            )}
        </section>
    );
};

export default AdminDoctors;