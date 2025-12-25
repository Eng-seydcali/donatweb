

import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import Pages from "./pages/Pages";
import Home from "./pages/Home";

function App() {
  

  return (
    <div className="relative">
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Donations" element={<Donations/>}/>
        <Route path="/Pages" element={<Pages/>}/>
      </Routes>


    

      {/* Hero Section */}
      
    </div>
  );
}

export default App;
