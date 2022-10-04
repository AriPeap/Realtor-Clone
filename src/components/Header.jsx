import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(path) {
    if (location.pathname === path) return true;
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50 ">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              onClick={() => navigate("/")}
              className={`transition  ease-in-out hover:text-black hover:border-b-red-500 cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/offers")}
              className={`transition  ease-in-out hover:text-black hover:border-b-red-500 cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
            >
              Offers
            </li>
            <li
              onClick={() => navigate("/sign-in")}
              className={`transition  ease-in-out hover:text-black hover:border-b-red-500 cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              }`}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}