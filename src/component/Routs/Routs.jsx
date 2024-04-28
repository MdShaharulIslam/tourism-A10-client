import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Error from "../Error/Error";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import AllTouristsSpot from "../All Tourists Spot/AllTouristsSpot";
import MyList from "../Mylist/MyList";
import AddTouristSpot from "../addTouristSpot/AddTouristSpot";
import PrivateRoute from "./PrivetRout";
import Footer from "../Footer/Footer";
import AddedCard from "../AddedCard/AddedCard";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: "/addTouristSpot",
        element: <PrivateRoute> <AddTouristSpot></AddTouristSpot></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/homeData')
       
      },
      {
        path: "/myList",
        element:<PrivateRoute><MyList></MyList></PrivateRoute>,    
         loader: () => fetch('http://localhost:5000/tourism')
       
         
      },
      {
        path: "/footer",
        element:<Footer></Footer>
         
      },
      {
        path: "/addedCars",
        element:<AddedCard></AddedCard>
   
         
      }

    ],
  },
]);
export default router;
