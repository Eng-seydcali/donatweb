import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    
    <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <img className="w-28" src={logo} alt="" />
      <button
        className="absolute top-4 right-4 text-xl"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
      <nav className="flex flex-col gap-4 mt-12 text-gray-800">
      <Link to="/" className=" hover:text-yellow-500">Home</Link>
        <Link to="/About" className=" hover:text-yellow-500">About</Link>
        <Link to="/Donations" className=" hover:text-yellow-500">Donations</Link>
        <Link to="/Pages" className=" hover:text-yellow-500">Pages</Link>
        <Link to="/Blog" className=" hover:text-yellow-500">Blog</Link>
        <Link to="/Contact" className=" hover:text-yellow-500">Contact</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
