import { useEffect, useState } from "react";
import { getAllUsers, deleteUser, updateUser } from "../../services/Service";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getAllUsers(page, 10);
                console.log("API Response:", response.data);
                setUsers(response.data.users || []);
                setTotalUsers(response.data.totalUsers || 0);
            } catch (error) {
                console.error("Error fetching users:", error);
                setUsers([]);
                alert("Failed to fetch users.");
            }
        };

        fetchUsers();
    }, [page]);

    const handleDelete = async (userName) => {
        if (window.confirm(`Are you sure you want to delete user ${userName}?`)) {
            try {
                await deleteUser(userName);
                alert(`User ${userName} deleted successfully.`);
                setUsers(users.filter((user) => user.userName !== userName));
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Failed to delete user.");
            }
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUser(editingUser);
            alert("User updated successfully.");
            setEditingUser(null);
        } catch (error) {
            console.error("Error updating user:", error);
            alert("Failed to update user.");
        }
    };

    const handleEditClick = (user) => {
        setEditingUser(user);
    };

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                    <thead>
                    <tr className="bg-gray-100 text-gray-600 text-left uppercase text-sm">
                        <th className="py-3 px-4">ID</th>
                        <th className="py-3 px-4">Username</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Roles</th>
                        <th className="py-3 px-4">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(users) && users.length > 0 ? (
                        users.map((user) => (
                            <tr
                                key={user.id}
                                className="border-t border-gray-200 hover:bg-gray-50"
                            >
                                <td className="py-3 px-4">{user.id}</td>
                                <td className="py-3 px-4">{user.userName}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.roles.join(", ")}</td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleDelete(user.userName)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="5"
                                className="py-3 px-4 text-center text-gray-500"
                            >
                                No users found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className={`px-4 py-2 rounded ${
                        page === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-gray-700 text-white hover:bg-gray-800"
                    }`}
                >
                    Previous
                </button>
                <button
                    disabled={page * 10 >= totalUsers}
                    onClick={() => setPage(page + 1)}
                    className={`px-4 py-2 rounded ${
                        page * 10 >= totalUsers
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-gray-700 text-white hover:bg-gray-800"
                    }`}
                >
                    Next
                </button>
            </div>

            {editingUser && (
                <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Update User: {editingUser.userName}
                    </h3>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                value={editingUser.email}
                                onChange={(e) =>
                                    setEditingUser({
                                        ...editingUser,
                                        email: e.target.value,
                                    })
                                }
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditingUser(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AllUsers;
