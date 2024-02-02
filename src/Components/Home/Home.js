import * as React from "react";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import CreateRegion from "../Region/CreateRegion";
import GetRegion from "../Region/GetRegion";
import CreateArea from "../Area/CreateArea";
import GetArea from "../Area/GetArea";
import { Link, useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate = useNavigate();
  const isAuthenticated = !!sessionStorage.getItem('token');
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    alert('You have been logged out.');
    navigate('/login');
  
  };

  return (
    
    
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden relative flex-col pt-5 w-full min-h-[910px] max-md:max-w-full">
        
        <div className="flex relative gap-5 justify-between self-center w-full text-sm font-medium leading-5 whitespace-nowrap max-w-[1216px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d71dc243d1a1d1733da773dfa56fca382acade967c90cf155c6d0bc8d50d48?"
            className="max-w-full aspect-[2.13] w-[102px]"
          />
         <div className="flex gap-4 items-start self-start">
      {/* Conditional rendering based on authentication status */}
      {!isAuthenticated ? (
        <>
          {/* Login */}
          <Link to="/login" className="flex-grow justify-center px-6 py-3 text-white bg-blue-700 rounded-lg max-md:px-5">
            Login
          </Link>
          {/* Registration */}
          <Link to="/register" className="flex flex-col flex-1 justify-center py-px text-blue-700 bg-blue-700 rounded-lg">
            <div className="z-10 justify-center px-6 py-3 bg-sky-50 rounded-lg border border-blue-700 border-solid max-md:px-5">
              Registration
            </div>
          </Link>
        </>
      ) : (
        <>
          {/* Logout */}
          <button onClick={handleLogout} className="flex-grow justify-center px-6 py-3 text-white bg-red-700 rounded-lg max-md:px-5">
            Logout
          </button>
          {/* Other protected routes */}
          <Link to="/createRegion" className="flex-grow justify-center px-6 py-3 text-white bg-blue-700 rounded-lg max-md:px-5">
            Create Region
          </Link>
          <Link to="/createArea" className="flex-grow justify-center px-6 py-3 text-white bg-blue-700 rounded-lg max-md:px-5">
            Create Area
          </Link>
          <Link to="/getRegion" className="flex-grow justify-center px-6 py-3 text-white bg-blue-700 rounded-lg max-md:px-5">
            Get Region
          </Link>
          <Link to="/getArea" className="flex-grow justify-center px-6 py-3 text-white bg-blue-700 rounded-lg max-md:px-5">
            Get Area
          </Link>
        </>
      )}
    </div>
        </div>
        <div className="relative mt-5 w-full bg-slate-300 min-h-[1px] max-md:max-w-full" />
        <div className="flex relative z-10 flex-col px-5 mt-28 mb-0 w-full bg-slate-50 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          
        <h3 className="text-center text-4xl mt-12 font-bold">Welcome to my MAAC TASK</h3>


          
          <div className="flex gap-5 justify-between px-5 py-6 mt-80 w-full text-sm bg-gray-100 text-slate-500 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div>2022 � MAAC</div>
            <div className="flex gap-5 justify-between">
              <div>Contact Us</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="mt-40 w-full bg-neutral-200 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      
     
     
   
     
     
      <div className="flex justify-center items-center px-16 py-12 w-full text-center bg-slate-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-10 mb-5 w-full max-w-[1216px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5068164a83c103a840d3040f080ed3c7fbb0901474ae1d2829765bf840050f4?"
            className="max-w-full aspect-[2.13] w-[136px]"
          />
          <div className="mt-10 text-base font-medium leading-6 text-white w-[516px] max-md:max-w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1b0c914e2d75a9c3d60557bd585d3fca5949ab4bcfebe344a82b1b46f62c22e?"
            className="mt-9 max-w-full aspect-[5] w-[200px]"
          />
          <div className="shrink-0 self-stretch mt-24 h-px bg-blue-950 max-md:mt-10 max-md:max-w-full" />
          <div className="mt-12 text-lg font-bold leading-7 text-red-600 whitespace-nowrap max-md:mt-10">
            � All rights reserve by <span className="text-red-600">MAAC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;