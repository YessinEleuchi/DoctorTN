// src/components/admin/Specialities.jsx
import  { useEffect, useState } from "react";
import { getSpecialities, getDoctorsBySpeciality } from "../services/Speciality.js";

const Specialities = () => {
    const [specialities, setSpecialities] = useState([]);
    const [selectedSpeciality, setSelectedSpeciality] = useState(null);
    const [doctors, setDoctors] = useState([]);

    // Charger les spécialités au démarrage
    useEffect(() => {
        const fetchSpecialities = async () => {
            try {
                const specialitiesList = await getSpecialities();
                setSpecialities(specialitiesList);
            } catch (error) {
                console.error(error);
                alert("Failed to fetch specialities.");
            }
        };
        fetchSpecialities();
    }, []);

    // Charger les docteurs par spécialité
    const handleSpecialityClick = async (speciality) => {
        setSelectedSpeciality(speciality);
        try {
            const response = await getDoctorsBySpeciality(speciality);
            setDoctors(response.data);
        } catch (error) {
            console.error(error);
            alert("Failed to fetch doctors.");
        }
    };

    return (
        <div>
            <h2>Specialities</h2>
            <ul>
                {specialities.map((speciality) => (
                    <li
                        key={speciality}
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => handleSpecialityClick(speciality)}
                    >
                        {speciality}
                    </li>
                ))}
            </ul>

            {selectedSpeciality && (
                <div>
                    <h3>Doctors in {selectedSpeciality}</h3>
                    {doctors.length > 0 ? (
                        <table>
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            {doctors.map((doctor) => (
                                <tr key={doctor.Id}>
                                    <td>{doctor.FirstName}</td>
                                    <td>{doctor.LastName}</td>
                                    <td>{doctor.Email}</td>
                                    <td>{doctor.PhoneNumber}</td>
                                    <td>{doctor.Adress}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No doctors found in this speciality.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Specialities;
