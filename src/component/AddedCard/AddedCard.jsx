import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AddedCard = ({ tourism, setTourisms }) => {
  
  const handleDelete = (_id) => {
    fetch(`https://tourisms.vercel.app/tourism/${_id}`, {
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
       _id
  } = tourism;

  return (
    <tr>
      <td>{countryName}</td>
      <td>{spotName}</td>
      <td>{location}</td>
      <td>{discription}</td>
      <td>{seassonality}</td>
      <td>{avarageCost}</td>
      <td>{travelTime}</td>
      <td>{totalVisitorPerYear}</td>
      <td>{userName} ({email})</td>
      <td>
      <div className="card-actions grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <Link
             to={'/allTouristSpot'}><button className="btn bg-[#00ffa6]">View Details</button></Link>
            <Link to={`/UpdatePost/${_id}`}><button className="btn bg-[#00ffa6]">Update Spot</button></Link>
            <Link ><button onClick ={()=>handleDelete(_id)}className="btn bg-[#00ffa6]">Delete Spot</button></Link>
            </div>
      </td>
    </tr>
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
    photoUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired // Add _id to propTypes
  }).isRequired,
  setTourisms: PropTypes.func.isRequired // Ensure setTourisms is passed as a prop
};

export default AddedCard;
