// import  {  useEffect } from 'react';
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import HomeCard from "../HomeData/HomeCard";
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    

    // useEffect(() => {
    //     fetch('http://localhost:5000/tourism')
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
                
    //         })
    //         .catch(error => {
    //             console.error('Error fetching home data:', error);
    //             // Implement error handling logic here
    //         });
    // }, []);
    const tourisms =useLoaderData();

    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <div className="mx-8">
                <Navber />
                <Banner />
                <h1 className="font-extrabold text-4xl text-center my-4">Popular Places</h1>
                <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-6 ">
                {tourisms.map(tourism => <HomeCard key={tourism._id } tourism={tourism} />)}
                     
                </div>
            </div>
            <div className="w-full flex"> </div>
            <Footer />
        </div>
    );
};

export default Home;
