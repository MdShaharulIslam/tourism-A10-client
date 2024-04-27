import { useLoaderData } from "react-router-dom";
import Navber from "../Navber/Navber";
import AddedCard from "../AddedCard/AddedCard";


const MyList = () => {
    const tourisms =useLoaderData();
    return (
        <div>
             <div className="mx-8">
             <Navber></Navber>
            </div>
            <h1>my list: {tourisms.length}</h1>

            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-6 ">
            {tourisms.map(tourism => <AddedCard key={tourism.id } tourism={tourism}></AddedCard>)}
            </div>
        </div>
    );
};

export default MyList;