import  { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import HomeCard from "../HomeData/HomeCard";

const Home = () => {
    const [homeData, setHomeData] = useState([]);

    // useEffect to fetch home data from an API endpoint or any other data source
    useEffect(() => {
        // Fetch home data from an API endpoint or any other data source
        fetch('http://localhost:500/homeData')
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                setHomeData(data); // Set the fetched data to the state
            })
            .catch(error => console.error('Error fetching home data:', error));
    }, []);

    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <div className="mx-8">
                <Navber />
                <Banner />
                <h1 className="font-extrabold text-4xl text-center my-4">Popular Places</h1>
                <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-6 ">
                     <HomeCard homeData={homeData} />
                </div>
            </div>
            <div className="w-full flex"> </div>
            <Footer />
        </div>
    );
};

export default Home;
