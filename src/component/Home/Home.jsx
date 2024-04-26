import { Helmet } from "react-helmet";

import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";


const Home = () => {
    return (
        <div>
        <Helmet><title>Home</title></Helmet>
         <div className="mx-8">
        <Navber></Navber>
            
            <Banner />
            <h1 className="font-extrabold text-4xl text-center my-4">Popular Places</h1>
            
            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-6 ">
            
               
               
            </div>
          
         
           
        </div>
        <div className="w-full flex"> </div>
        
       </div>
    );
};

export default Home;