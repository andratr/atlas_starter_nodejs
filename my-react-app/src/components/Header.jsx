import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";

const Header = () => {
  const location = useLocation();

  return (
    <div
      className="fixed w-full bg-white top-0 z-10"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    >
      <div className="container relative m-auto pr-10 pl-10 p-1 flex justify-between items-center backdrop-filter backdrop-blur-lg">
        <h1 className="font-xl font-bold">
          {" "}
          <Link to="/">
            <FaThreads size={34} />
          </Link>
        </h1>
        <div className="pl-12">
          <ul className="flex md:relative pr-5 flex-col md:flex-row w-full text-center md:flex items-center">
            {/* Navigation links */}
            <li className="p-4 pl-8 pr-8 cursor-pointer rounded hover:bg-sky-100">
              <Link to="/">
                {location.pathname === "/" ? (
                  <GoHomeFill size={30} />
                ) : (
                  <GoHome size={30} />
                )}
              </Link>
            </li>
            <li
              className={`p-4 pl-8 pr-8 cursor-pointer rounded ${
                location.pathname === "/search" ? "text-black" : "text-gray-400"
              } hover:bg-sky-100`}
            >
              <Link to="/search">
                <IoSearch size={30} />
              </Link>
            </li>
          </ul>
        </div>
        <div
          style={{ borderRadius: "0.5rem" }}
          className="pl-4 pr-4 p-1 cursor-pointer rounded hover:bg-sky-100 bg-black text-white"
        >
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
