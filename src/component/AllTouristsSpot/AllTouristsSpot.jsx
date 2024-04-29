import { useState } from "react";
import { Helmet } from "react-helmet";
import Navber from "../Navber/Navber";
import { useLoaderData } from "react-router-dom";
import AllCard from "../AllCard/AllCard";

const AllTouristsSpot = () => {
    const [sortBy, setSortBy] = useState(null);
    const tourisms = useLoaderData();

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const sortedTourisms = () => {
        if (sortBy === "asc") {
            return [...tourisms].sort((a, b) => a.avarageCost - b.avarageCost);
        } else if (sortBy === "desc") {
            return [...tourisms].sort((a, b) => b.avarageCost - a.avarageCost);
        } else {
            return tourisms;
        }
    };

    return (
        <div>
            <div className="mx-8">
                <Helmet><title>AllTourist</title></Helmet>
                <Navber />
                <div className="mt-4">
                    <label htmlFor="sort">Sort by Average Cost:</label>
                    <select id="sort" onChange={handleSortChange}>
                        <option value="">Select</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>
            <h1 className="text-center my-4">All Tourist Spots</h1>
            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-6 ">
                {sortedTourisms().map((tourism) => (
                    <AllCard key={tourism._id} tourism={tourism} />
                ))}
            </div>
        </div>
    );
};

export default AllTouristsSpot;
