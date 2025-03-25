import React from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Header = ({ setIsCartOpen, setIsMenuOpen }) => {
  return (
    <header className="absolute top-0 left-0 flex justify-between items-center px-6 md:px-20 py-4 bg-white shadow-md  top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center space-x-2">
      
        <img className="w-32" src={logo} alt="" />
      </div>
      <nav className="hidden md:flex gap-5 text-l font-bold bg-teal-800 px-8 py-4 rounded-full   text-white">
        <Link to="/" className=" hover:text-yellow-500">Home</Link>
        <Link to="/About" className=" hover:text-yellow-500">About</Link>
        <Link to="/Donations" className=" hover:text-yellow-500">Donations</Link>
        <Link to="/Pages" className=" hover:text-yellow-500">Pages</Link>
        <Link to="/Blog" className=" hover:text-yellow-500">Blog</Link>
        <Link to="/Contact" className=" hover:text-yellow-500">Contact</Link>
      </nav>
      <div className="flex items-center space-x-4">
        
        <button className="text-2xl text-white p-4 font-bold  rounded-full bg-teal-800 hover:bg-yellow-500" onClick={() => setIsCartOpen(true)}>
          <FiShoppingCart />
        </button>
        <button className="md:hidden text-2xl text-white p-4 font-bold  rounded-full bg-yellow-500 hover:bg-teal-800" onClick={() => setIsMenuOpen(true)}>
          <FiMenu />
        </button>
        <button className="hidden md:flex bg-yellow-500 text-white font-bold px-4 py-4 rounded-full hover:bg-teal-800 transition">
          Donate Now
        </button>
      </div>
    </header>
  );
};

export default Header;
