
import { Helmet } from 'react-helmet';

import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from '../Navber/Navber';

const ContactForm = () => {
  return (
    <div className="mx-6">
       <Navbar></Navbar>

        <div className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto max-w-4xl bg-white text-[#333] font-[sans-serif]">
                      <Helmet><title>Contact</title></Helmet>
      <div>
        <h1 className="text-3xl font-extrabold">Lets Talk</h1>
        <p className="text-sm text-gray-400 mt-3">
          Have some big idea or brand to develop and need help? Then reach out
          wed love to hear about your project and provide help.
        </p>
        <div className="mt-12">
          <h2 className="text-lg font-extrabold">Email</h2>
          <ul className="mt-3">
            <li className="flex items-center">
              <div className="bg-purple-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
              </div>
              <a href="mailto:info@example.com" className="text-[#007bff] text-sm ml-3">
                <small className="block">Mail</small>
                <strong>shaharulislam025.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-12 items-center">
          <h2 className="text-lg font-extrabold">Mobile</h2>
          <ul className="flex mt-3 space-x-4">
            <li className="bg-purple-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <FaPhone />
            </li>
            +8801777-492725
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-lg font-extrabold">Socials</h2>
          <ul className="flex mt-3 space-x-4">
            <li className="bg-purple-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="bg-purple-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="bg-purple-400 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            {/* Other social icons */}
          </ul>
        </div>
      </div>
      <form className="ml-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#007bff]"
        ></textarea>
        <button
          type="button"
          className="text-white bg-purple-400  font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          Send
        </button>
      </form>
    </div>
       </div>
    
  );
};

export default ContactForm;
