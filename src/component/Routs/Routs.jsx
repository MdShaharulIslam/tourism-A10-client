import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Error from "../Error/Error";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import AllTouristsSpot from "../AllTouristsSpot/AllTouristsSpot";
import MyList from "../Mylist/MyList";
import AddTouristSpot from "../addTouristSpot/AddTouristSpot";
import PrivateRoute from "./PrivetRout";
import Footer from "../Footer/Footer";
import AddedCard from "../AddedCard/AddedCard";
import HomeCDetails from "../HomeCardDetails/HomeCDetails";
import About from "../About/About";
import ContactForm from "../Contact/Contact";
import ContactMap from "../ContactMap/ContactMap";
import UpdatePost from "../UpdatePost/UpdatePost";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>  ,
        loader: () => fetch('https://tourism-a10-server-gold.vercel.app/tourism')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
            {        path: "/about",
        element: <About></About>
      },
            {        path: "/location",
        element: <ContactMap></ContactMap>
      },
       {        path: "/contact",
        element: <ContactForm></ContactForm>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristsSpot></AllTouristsSpot>
       , loader: () => fetch('https://tourism-a10-server-gold.vercel.app/tourism')
      },
      {
        path: "/addTouristSpot",
        element: <PrivateRoute> <AddTouristSpot></AddTouristSpot></PrivateRoute>
       
      },
      {
        path: "/myList",
        element:<PrivateRoute><MyList></MyList></PrivateRoute>,    
         loader: () => fetch('https://tourism-a10-server-gold.vercel.app/tourism')
       
         
      },
      {
        path: "/footer",
        element:<Footer></Footer>
         
      },
      {
        path: "/addedCars",
        element:<AddedCard></AddedCard>
   
         
      },
      {
        path: "/updatepost/:id",
        element:<UpdatePost></UpdatePost>,
        loader: ({params}) => fetch(`https://tourism-a10-server-gold.vercel.app/tourism/${params.id}`)
   
         
      },
      {
        path: "/details/:_id",
        element: ( <PrivateRoute>
            <HomeCDetails ></HomeCDetails>
          </PrivateRoute>),
         
                loader: () => fetch('https://tourism-a10-server-gold.vercel.app/tourism')
      }

    ],
  },
]);
export default router;
