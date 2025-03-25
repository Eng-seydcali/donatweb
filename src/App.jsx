
import HeroSection from "./components/HeroSection";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Blog from "./assets/pages/Blog";
import Contact from "./assets/pages/Contact";
import Donations from "./assets/pages/Donations";
import Pages from "./assets/pages/Pages";

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
