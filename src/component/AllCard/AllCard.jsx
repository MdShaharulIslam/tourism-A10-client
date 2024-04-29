import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllCard = ({ tourism }) => {
    if (!tourism) {
        return <div>Error: Tourism data is missing.</div>;
    }

    const {
        spotName,
        countryName,
        location,
        travelTime,
        photoUrl,
        _id,
        avarageCost // Corrected the variable name
    } = tourism;

    return (
        <div className="mb-8 mx-8">
            <div className="card lg:w-96 md:w-96 glass">
                <figure>
                    <img
                        data-aos="fade-up"
                        className="w-full h-48"
                        src={photoUrl || ''}
                        alt="Tourist spot"
                    />
                </figure>
                <div className="card-body">
                    <h2 data-aos="fade-down-right" className="card-title font-bold text-3xl">{countryName}</h2>
                    <p>{spotName}</p>
                    <p>Location: {location}</p>
                    <p>Travel Time: {travelTime}</p>
                    <p>Travel Time: {avarageCost}</p> {/* Corrected the variable name */}
                    <div className="card-actions justify-start">
                        <Link to={`/details/${_id}`}><button className="btn bg-[#00ffa6]">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllCard.propTypes = {
    tourism: PropTypes.shape({
        spotName: PropTypes.string.isRequired,
        countryName: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        travelTime: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        avarageCost: PropTypes.number.isRequired // Added prop type for averageCost
    }).isRequired
};

export default AllCard;
