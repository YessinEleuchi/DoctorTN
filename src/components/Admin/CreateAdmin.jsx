import { useState } from "react";
import { adminCreateAdminUser } from "../../services/Service.js";


const CreateAdminUser = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        adress: "",
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await adminCreateAdminUser(formData);
            alert("Admin user created successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to create admin user.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
            <div className="text-center mb-16">
                <h4 className="text-gray-800 text-base font-semibold mt-6">
                    Create Admin User
                </h4>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                    {Object.keys(formData).map((key) => {
                        if (key === "gender") {
                            return (
                                <div key={key}>
                                    <label className="text-gray-800 text-sm mb-2 block">
                                        Gender
                                    </label>
                                    <select
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleChange}
                                        className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            );
                        }

                        return (
                            <div key={key}>
                                <label className="text-gray-800 text-sm mb-2 block">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </label>
                                <input
                                    type={key === "password" ? "password" : "text"}
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                                    required
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="!mt-12">
                    <button
                        type="submit"
                        className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateAdminUser;