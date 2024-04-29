import { Link } from "react-router-dom";
import logo from '/public/logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#00ffa6] text-base-content">
  <aside className="w-32">
    <img src={logo} alt="" />
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Air Agency</a>
    <a className="link link-hover">By bus</a>
    <a className="link link-hover">Best Pleace</a>
   
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
   <Link to="/about"> <a className="link link-hover">About us</a></Link>
  <Link to="/contact">  <a className="link link-hover">Contact</a></Link>
   <Link to="/location">  <a className="link link-hover">Location</a></Link>
    
  </nav> 
  
</footer>
        </div>
    );
};

export default Footer;