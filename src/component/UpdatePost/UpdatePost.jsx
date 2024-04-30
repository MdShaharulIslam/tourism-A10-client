import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navber/Navber";
import Swal from "sweetalert2";

const UpdatePost = () => {
    const tourism = useLoaderData();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        console.log('Form:', form); // Debug: Log the form element

        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const seassonality = form.seassonality.value;
        const location = form.location.value;
        const description = form.description.value; // Corrected typo: discription -> description
        const averageCost = form.averageCost.value; // Corrected typo: avarageCost -> averageCost
        const travelTime = form.travelTime.value;
        const totalVisitorPerYear = form.totalVisitorsPerYear.value;
        const photoUrl = form.photoUrl.value;
        const _id = tourism._id; // Retrieve _id from the loaded tourism data

        const updatePost = {
            _id,
            spotName,
            countryName,
            seassonality,
            location,
            description, // Corrected typo: discription -> description
            averageCost, // Corrected typo: avarageCost -> averageCost
            travelTime,
            totalVisitorPerYear,
            photoUrl,
        };

        console.log(updatePost); // Debug: Log the updatePost object

        fetch(`http://localhost:5000/tourism/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePost)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.updated) {
                Swal.fire({
                    title: "Update success",
                    text: "Do you want to continue",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
            }
        })
        .catch(error => {
            console.error('Error updating post:', error);
            Swal.fire({
                title: "Update failed",
                text: "An error occurred while updating the post",
                icon: "error",
                confirmButtonText: "Ok",
            });
        });
    }

    return (
        <div>
            <div className="mx-8">
                <Helmet>Added</Helmet>
                <Navbar />
            </div>
            <div className="p-4">
                <form onSubmit={handleUpdate} className="bg-[#FFFF] shadow-lg rounded-lg mt-8 p-4">
                    <h1 className="font-bold text-4xl text-center ">Add Spot where you visit</h1>
                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Country Name</span>
                            </label>
                            <div className="join w-full">
                                <select
                                    className="input input-bordered join-item w-full"
                                    name="countryName"
                                    defaultValue={tourism.countryName} // Set default value from loaded data
                                    required
                                >
                                    <option value="">Select country</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Cambodia">Cambodia</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Spot Name</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="spotName"
                                    defaultValue={tourism.spotName} // Set default value from loaded data
                                    placeholder="Spot Name"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Location</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="location"
                                    defaultValue={tourism.location} // Set default value from loaded data
                                    placeholder="Location"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Description</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="description"
                                    defaultValue={tourism.discription} // Set default value from loaded data
                                    placeholder="Description"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Average Cost</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="averageCost"
                                    defaultValue={tourism.avarageCost} // Set default value from loaded data
                                    placeholder="Average Cost"
                                    type="number"
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Seasonality</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="seasonality"
                                    defaultValue={tourism.seassonality} // Set default value from loaded data
                                    placeholder="Seasonality"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Travel Time</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="travelTime"
                                    defaultValue={tourism.travelTime} // Set default value from loaded data
                                    placeholder="Travel Time"
                                    type="number"
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Total Visitors Per Year</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="totalVisitorsPerYear"
                                    defaultValue={tourism.totalVisitorPerYear} // Set default value from loaded data
                                    placeholder="Total Visitors Per Year"
                                    type="number"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4">
                        <label className="label">
                            <span className="font-bold">Photo Url</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="photoUrl"
                            defaultValue={tourism.photoUrl} // Set default value from loaded data
                            placeholder="Photo Url"
                            type="text"
                        />
                    </div>
                    <div className="w-full p-4">
                        <input type="submit" value="Update Tourist detail" className="btn bg-[#00ffa6] w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePost;
