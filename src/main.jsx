import React from 'react';
import ReactDOM from "react-dom/client";

import { RouterProvider } from 'react-router-dom'; 
import './index.css';
import router from './component/Routs/Routs';
import AuthProvider from './component/provider/AuthProvider';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);


