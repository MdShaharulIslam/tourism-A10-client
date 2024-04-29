import PropTypes from 'prop-types';

const AddedCard = ({ tourism, setTourisms }) => {
  
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/tourism/${_id}`, {
        method: "DELETE"
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to delete item');
            }
            // Update the list after deletion
            setTourisms(prevTourisms => prevTourisms.filter(tourism => tourism._id !== _id));
        })
        .catch(error => {
            console.error('Error deleting item:', error);
        });
};
  if (!tourism) {
    // Handle case where tourism object is not provided
    return <div>Error: Tourism data is missing.</div>;
  }

  const {
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
    photoUrl
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
          <p>Description: {discription}</p>
          <p>Seasonality: {seassonality}</p>
          <p>Average Cost: {avarageCost}</p>
          <p>Travel Time: {travelTime}</p>
          <p>Total Visitors Per Year: {totalVisitorPerYear}</p>
          <p>User: {userName} ({email})</p>
          <div className="card-actions justify-start">
          <button className="btn bg-[#00ffa6]">View Property</button>
          <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

AddedCard.propTypes = {
  tourism: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    spotName: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    seassonality: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    discription: PropTypes.string.isRequired,
    avarageCost: PropTypes.number.isRequired,
    travelTime: PropTypes.string.isRequired,
    totalVisitorPerYear: PropTypes.number.isRequired,
    photoUrl: PropTypes.string.isRequired
  }).isRequired,
  setTourisms: PropTypes.func.isRequired // Ensure setTourisms is passed as a prop
};

export default AddedCard;
