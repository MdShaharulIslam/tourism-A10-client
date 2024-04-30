// import  {  useEffect } from 'react';
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import HomeCard from "../HomeData/HomeCard";
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    

    
    const tourisms =useLoaderData().slice(0,6);

    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <div className="mx-8">
                <Navber />
                <Banner />
                <h1 className="font-extrabold text-4xl text-center my-4">Popular Places</h1>
                <Link to="allTouristSpot"><div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-6 ">
                {tourisms.map(tourism => <HomeCard key={tourism._id } tourism={tourism} />)}
                     
                </div></Link>
                
            </div>
            <div className="w-full flex"> </div>
            <Footer />
        </div>
    );
};

export default Home;
