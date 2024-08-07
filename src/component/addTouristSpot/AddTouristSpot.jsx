import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Navber from "../Navber/Navber";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Helmet } from "react-helmet";
const AddTouristSpot = () => {
    const [user, setUser] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [availableSpots, setAvailableSpots] = useState([]);
   
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        // Set available spots based on the selected country
        switch (e.target.value) {
            case "Bangladesh":
                setAvailableSpots([
                    "Sundarban",
                    "Cox’s Bazar",
                    "Rangamati",
                    "Bandarban",
                    "Saint Martin’s Island",
                ]);
                break;
            case "Thailand":
                setAvailableSpots([
                    "Bangkok",
                    "Chiang Mai",
                    "Ayutthaya",
                    "Phuket",
                    "Phi Phi Islands",
                ]);
                break;
            case "Indonesia":
                setAvailableSpots([
                    "Bali",
                    "Borobudur Temple",
                    "Komodo National Park",
                    "Raja Ampat Islands",
                    "Yogyakarta",
                ]);
                break;
            case "Malaysia":
                setAvailableSpots([
                    "Kuala Lumpur",
                    "Langkawi",
                    "Penang",
                    "Cameron Highlands",
                    "Taman Negara National Park",
                ]);
                break;
            case "Vietnam":
                setAvailableSpots([
                    "Ha Long Bay",
                    "Ho Chi Minh City",
                    "Hoi An Ancient Town",
                    "Phong Nha Caves",
                    "Mekong Delta",
                ]);
                break;
            case "Cambodia":
                setAvailableSpots([
                    "Angkor Wat",
                    "Siem Reap",
                    "Phnom Penh",
                    "Kep",
                    "Bokor National Park",
                ]);
                break;
            default:
                setAvailableSpots([]);
        }
    };

    const handleAddCountry = (e) => {
        e.preventDefault();
        const form = e.target;
        const spotName = form.spotName.value;
        const userName = user ? user.name : "Unknown";
        const email = user ? user.email : "Unknown";
        const countryName = form.countryName.value;
        const seassonality = form.seassonality.value;
        const location = form.location.value;
        const discription = form.discription.value;
        const avarageCost = form.avarageCost.value;
        const travelTime = form.travelTime.value;
        const totalVisitorPerYear = form.totalVisitorPerYear.value;
        const photoUrl = form.photoUrl.value;
        const tourism = {
            userName,
            email,
            spotName,
            countryName,
            seassonality,
            location,
            discription,
            avarageCost,
            travelTime,
            totalVisitorPerYear,
            photoUrl,
        };
        console.log(tourism);
        // send data to the server site
        fetch("https://tourisms.vercel.app/tourism", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tourism),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // Reset form fields
                form.reset();
                // Show success message
                Swal.fire({
                    title: "Success",
                    text: "Successfully added",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
            })
            .catch((error) => {
                console.error('Error adding tourism spot:', error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to add tourism spot",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            });
    };

    return (
        <div>
            <div className="mx-8">
                <Helmet>Added</Helmet>
                <Navber />
            </div>
            <div className="p-10">
                <form
                    onSubmit={handleAddCountry}
                    className="bg-[#FFFF] shadow-lg rounded-lg mt-8 p-4"
                >
                    <h1 className="font-bold text-4xl text-center ">
                        Add Spot where you visit
                    </h1>

                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Country Name</span>
                            </label>
                            <div className="join w-full">
                                <select
                                    className="input input-bordered join-item w-full"
                                    name="countryName"
                                    onChange={handleCountryChange}
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
                                <select
                                    className="input input-bordered join-item w-full"
                                    name="spotName"
                                    required
                                >
                                    <option value="">Select spot</option>
                                    {availableSpots.map((spot) => (
                                        <option key={spot} value={spot}>
                                            {spot}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* form supply */}
                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Location</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="location"
                                    placeholder="location"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">short description</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="discription"
                                    placeholder="discription"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    {/* form Category */}
                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Avarage Cost</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="avarageCost"
                                    placeholder="avarageCost"
                                    type="number"
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Seassonality</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="seassonality"
                                    placeholder="seassonality"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Travel_time</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="travelTime"
                                    placeholder="travelTime"
                                    type="number"
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">TotalVisitorPerYear</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="totalVisitorPerYear"
                                    placeholder="totalVisitorPerYear"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4">
                        {" "}
                        <label className="label">
                            <span className="font-bold">PhotoUrl</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="photoUrl"
                            placeholder="Photo Url"
                            type="text"
                        />
                        <input
                            type="submit"
                            value="Add Coffee"
                            className="btn bg-[#00ffa6] w-full"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;
