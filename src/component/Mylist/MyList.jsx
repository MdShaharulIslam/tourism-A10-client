import { useLoaderData } from "react-router-dom";
import Navber from "../Navber/Navber";
import AddedCard from "../AddedCard/AddedCard";

const MyList = () => {
    const tourisms = useLoaderData();

    const handleDelete = (_id) => {
        // Implement  delete logic here
        console.log("Delete item with ID:", _id);
    };

    const handleUpdate = (_id, newData) => {
        // Implement your update logic here
        console.log("Update item with ID:", _id, "New data:", newData);
    };

    return (
        <div>
            <div className="mx-8">
                <Navber />
            </div>
            <h1 className="text-center text-4xl text-[#00ffa6]">Your list </h1>

            <div >
                <div className="mx-8 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-2 py-3">Country Name</th>
                                <th className="px-2 py-3">Spot Name</th>
                                <th className="px-2 py-3">Location</th>
                                <th className="px-2 py-3">Description</th>
                                <th className="px-2 py-3">Seasonality</th>
                                <th className="px-2 py-3">Average Cost</th>
                                <th className="px-2 py-3">Travel Time</th>
                                <th className="px-2 py-3">Total Visitors Per Year</th>
                                <th className="px-2 py-3">User</th>
                                <th className="px-2 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {tourisms.map((tourism) => (
                                <AddedCard
                                    key={tourism._id}
                                    tourism={tourism}
                                    onDelete={() => handleDelete(tourism._id)} // Pass onDelete callback
                                    onUpdate={(newData) => handleUpdate(tourism._id, newData)} // Pass onUpdate callback
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;
