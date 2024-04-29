import PropTypes from 'prop-types';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navber/Navber';

const HomeCDetails = () => {
    const tourism = useLoaderData();
    const { _id } = useParams();

    // Finding the tourism object with the provided ID
    const tour = tourism.find(tourism => tourism._id === _id);

    // If tourism details not found, return a message
    if (!tour) {
        return <div>Tourism details not found.</div>;
    }

    // Destructuring tour object to extract details
    const {
        userName,
        email,
        spotName,
        countryName,
        seasonality,
        location,
        description,
        averageCost,
        travelTime,
        totalVisitorPerYear,
        photoUrl
    } = tour;

    return (
        <div className="mx-8">
            <Navbar />
            <h1>Details</h1>
            <div className="hero rounded-xl bg-purple-400">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{countryName}</h1>
                        <p className="text-gray-500 pt-4">Spot Name: {spotName}</p>
                        <p className="text-gray-500">User Name: {userName}</p>
                        <p className="text-gray-500">Email: {email}</p>
                        <hr className="w-full py-4 mt-4" />
                        <p className="text-gray-500">Travel Time: {travelTime}</p>
                        <p><span className="font-bold">Price: </span>{averageCost}</p>
                        <p className="mt-4 font-bold"><span className="">Status: {description}</span> </p>
                        <p className="mt-4 font-bold"><span className="">Area: {travelTime}</span> </p>
                        <hr className="w-full py-4 mt-4" />
                        <p className="mt-4 font-bold "><span className="text-gray-500">Location: </span>{location}</p>
                        <p className="mt-4 font-bold "><span className="text-gray-500">Facilities: </span>{totalVisitorPerYear}</p>
                        <p className="mt-4 font-bold "><span className="text-gray-500">Seasonality: </span>{seasonality}</p>
                        <div className="flex gap-4 mt-4">
                           <Link to="/"> <button className="btn bg-[#00ffa6]">View More Products</button></Link>
                        </div>
                    </div>
                    <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className=" bg-gray-400 shadow-xl h-full w-full  rounded-xl">
                            <img src={photoUrl} alt="Book" className="rounded-xl w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HomeCDetails.propTypes = {
    tourism: PropTypes.shape({
        spotName: PropTypes.string.isRequired,
        countryName: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        travelTime: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        seasonality: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        averageCost: PropTypes.number.isRequired,
        totalVisitorPerYear: PropTypes.number.isRequired,
        photoUrl: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired
};

export default HomeCDetails;
