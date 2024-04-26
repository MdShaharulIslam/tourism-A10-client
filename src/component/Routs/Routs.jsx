import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Error from "../Error/Error";
import Root from "../Root/Root";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";




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

    ],
  },
]);
export default router;
