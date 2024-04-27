import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="m-0 justify-center "> 
        <div className="mt-8 mx-8"><Link to="/"> <button className="btn btn-outline bg-[#00ffa6]">Back to Home</button>
         </Link></div>
        
           <img className="w-1/2 m-auto flex justify-center" src="/public/404.gif" alt="#" />
          
        </div>
    );
};

export default Error;