
import React, { useState } from "react";
import Header from "../components/Header";
import CartSidebar from "../components/CartSidebar";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../components/HeroSection";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { FaEgg, FaGraduationCap, FaPrescriptionBottleAlt } from "react-icons/fa";



function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <FaEgg size={40} className="text-yellow-500" />,
      title: "Healthy Foods",
      description: "Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities.",
    },
    {
      icon: <FaGraduationCap size={40} className="text-green-600" />,
      title: "Education Support",
      description: "Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities.",
    },
    {
      icon: <FaPrescriptionBottleAlt size={40} className="text-orange-500" />,
      title: "Medical Help",
      description: "Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities.",
    },
  ];
  const categories = [
  {
    title: 'education',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
  },
  {
    title: 'food',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
  },
  {
    title: 'water',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc',
  },
  {
    title: 'health',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
const volunteers = [
  {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Alex Johnson',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    name: 'Emily Davis',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];




  return (
    <>
     <div className="relative">
    <Header setIsCartOpen={setIsCartOpen} setIsMenuOpen={setIsMenuOpen}/>
    <CartSidebar isOpen={isCartOpen} setIsOpen={setIsCartOpen}/>
    <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>

    </div>
    <HeroSection/>
   
    <section className="relative  bg-gray-100  py-20">
      {/* Background Design */}
      <div className="absolute top-[-100px] left-0 w-full h-96  md:bg-[url('/images/section.png')] bg-cover bg-center rounded-tl-[70%] md:rounded-tr-[25%]" ></div>

      {/* Content Wrapper */}
      <div className="relative top-[-85px] max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
            <div className="flex justify-center">
              <img src="/icons/money.png" alt="Fundraising" className="w-14" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Fundraising Trust</h3>
            <p className="text-gray-600 mt-2">
              Stay updated with the latest news, events, and impact stories from our organization.
            </p>
            <a href="#" className="mt-4 inline-block text-teal-800 font-semibold hover:underline">
              View Details ↗
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
            <div className="flex justify-center">
              <img src="/icons/money.png" alt="Charity Donate" className="w-14" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Charity Donate</h3>
            <p className="text-gray-600 mt-2">
              Stay updated with the latest news, events, and impact stories from our organization.
            </p>
            <a href="#" className="mt-4 inline-block text-teal-800 font-semibold hover:underline">
              View Details ↗
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
            <div className="flex justify-center">
              <img src="/icons/money.png" alt="Treatment Help" className="w-14" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Treatment Help</h3>
            <p className="text-gray-600 mt-2">
              Stay updated with the latest news, events, and impact stories from our organization.
            </p>
            <a href="#" className="mt-4 inline-block text-teal-800 font-semibold hover:underline">
              View Details ↗
            </a>
          </div>
        </div>
      </div>
    </section>



 
    <section className="relative py-16 top-[-100px] px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="relative">
          {/* Large Image */}
          <img
            src="/images/about-1.png"
            alt="Happy Children"
            className="w-full rounded-xl lg:w-[550px] lg:h-[450px] object-cover"
          />
          {/* Small Overlay Image - Only Visible on Desktop */}
          <img
            src="/images/Border.png"
            alt="Children Learning"
            className=" lg:block lg:absolute w-[550px] h-[450px] mt-5 lg:top-2 lg:right-[20px] lg:w-[220px] lg:h-[180px]  rounded-xl object-cover border-3 border-white  "
          />

          {/* Floating Text Box */}
          <div className="absolute bottom-4 left-4 bg-green-800 text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">266300+ Children in Africa Need School</p>
            <a href="#" className="text-yellow-400 font-semibold underline">Become A Volunteer</a>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-yellow-500 font-semibold">About Us</h3>
          <h2 className="text-4xl font-bold mt-2 leading-tight">
            Give Time, Change Lives Volunteer Opportunities
          </h2>
          <p className="text-gray-600 mt-4">
            Our secure online donation platform allows you to make contributions quickly and safely.
            Choose from various payment methods and set up one-time or recurring donations with ease.
          </p>

          <p className="text-gray-600 mt-4">
            Discover the inspiring stories of individuals and communities transformed by our programs.
            Our success stories highlight the real-life impact of your donations and the resilience of those we help.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <img src="/icons/money.png" alt="Donation" className="w-8" />
            <p className="text-lg font-semibold">32 Years of Experience</p>
          </div>

          <a href="#" className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600">
            About More ↗
          </a>
        </div>
      </div>
    </section>

    <div className="font-sans">
    <div className="bg-[#f7f8f6]">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
   {/* <!-- Left side content --> */}
   <div className="flex-1 relative w-full max-w-lg md:max-w-none">
    <div className="inline-flex items-center gap-1 mb-2">
     <i className="far fa-heart text-[#1a3a2e] text-lg">
     </i>
     <span className="text-[13px] italic font-semibold text-[#f5a623]">
      Our Services
     </span>
    </div>
    <h2 className="font-semibold text-[#111111] text-3xl sm:text-4xl md:text-5xl leading-tight max-w-md">
     We’re Helping People I Need Around The World
    </h2>
    <p className="text-[#7a7a7a] text-[13px] sm:text-sm max-w-md mt-4 leading-relaxed">
     Discover the inspiring stories of individuals and communities transformed by our programs.
        Our success stories highlight the real-life impact of your donations and the resilience of
        those we help. These narratives showcase the power of compassion and generosity.
    </p>
   <img
  alt="Open human hand palm facing up with skin tone and natural lighting"
  className="absolute bottom-0 left-0 w-[400px] max-w-full -mb-6 md:-mb-12"
  height="250"
  src="https://storage.googleapis.com/a1aa/image/faa82d6a-54f6-41cc-5dd4-27a86f875a4c.jpg"
  style={{ zIndex: -1 }}
  width="400"
/>

  <img
  alt="Dark green brush stroke decorative element"
  className="absolute bottom-0 left-0 w-[200px] max-w-full -mb-2 md:-mb-6"
  height="100"
  src="https://storage.googleapis.com/a1aa/image/cb8dd97a-b84b-44c8-4755-afd2f75dc7c8.jpg"
  style={{ zIndex: -2 }}
  width="200"
/>

   </div>
   {/* <!-- Right side cards --> */}
   <div className="flex-1 w-full max-w-md space-y-6">
    {/* <!-- Card 1 --> */}
    <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-md relative">
     <div className="flex-shrink-0">
      <img alt="Illustration of a sunny side up egg with yellow yolk and white background" className="w-12 h-12" height="48" src="https://storage.googleapis.com/a1aa/image/36800e0a-6996-4e90-e402-1accbbf89ce9.jpg" width="48"/>
     </div>
     <div className="flex-1">
      <h3 className="font-semibold text-[#111111] text-base leading-tight">
       Healthy Foods
      </h3>
      <p className="text-[#7a7a7a] text-xs leading-relaxed mt-1 max-w-[320px]">
       Share stories and experiences from current volunteers to inspire others to join. Allow
            users to sign up for volunteer opportunities.
      </p>
     </div>
     <button aria-label="Go to Healthy Foods details" className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1a5e52] flex items-center justify-center text-white hover:bg-[#144b42] transition">
      <i className="fas fa-arrow-up-right">
      </i>
     </button>
    </div>

    <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-md relative">
     <div className="flex-shrink-0">
      <img alt="Illustration of a green graduation cap with gray tassel" className="w-12 h-12" height="48" src="https://storage.googleapis.com/a1aa/image/f966783f-2e1d-4b3c-4608-5c8f6b1b3f25.jpg" width="48"/>
     </div>
     <div className="flex-1">
      <h3 className="font-semibold text-[#111111] text-base leading-tight">
       Education Support
      </h3>
      <p className="text-[#7a7a7a] text-xs leading-relaxed mt-1 max-w-[320px]">
       Share stories and experiences from current volunteers to inspire others to join. Allow
            users to sign up for volunteer opportunities.
      </p>
     </div>
     <button aria-label="Go to Education Support details" className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1a5e52] flex items-center justify-center text-white hover:bg-[#144b42] transition">
      <i className="fas fa-arrow-up-right">
      </i>
     </button>
    </div>

    <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-md relative">
     <div className="flex-shrink-0">
      <img alt="Illustration of a medical help icon with yellow medicine bottle and gray cross" className="w-12 h-12" height="48" src="https://storage.googleapis.com/a1aa/image/c49fe80e-1846-4e0e-0739-3ffe3cfb0160.jpg" width="48"/>
     </div>
     <div className="flex-1">
      <h3 className="font-semibold text-[#111111] text-base leading-tight">
       Medical Help
      </h3>
      <p className="text-[#7a7a7a] text-xs leading-relaxed mt-1 max-w-[320px]">
       Share stories and experiences from current volunteers to inspire others to join. Allow
            users to sign up for volunteer opportunities.
      </p>
     </div>
     <button aria-label="Go to Medical Help details" className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1a5e52] flex items-center justify-center text-white hover:bg-[#144b42] transition">
      <i className="fas fa-arrow-up-right">
      </i>
     </button>
    </div>
   </div>
  </div>
  </div>

  <div
  className="hidden md:block absolute top-[40%] left-[45%] w-48 h-48 pointer-events-none"
  style={{ zIndex: 0 }}
>
  <svg
    fill="none"
    stroke="#f5a623"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 100 100"
    className="w-full h-full"
  >
    <path d="M10 80 C40 10, 60 10, 90 80" />
    <path d="M90 80 L80 70 M90 80 L80 90" />
  </svg>
</div>

      {/* Map Section */}
      <section className="h-[400px]">
        <MapContainer center={[0, 0]} zoom={2} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
        </MapContainer>
      </section>

      {/* Donation Categories */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">See Your Favorite Transparent Donation Causes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {categories.map((item, index) => (
  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold capitalize">{item.title}</h3>
      <p className="text-gray-600 mt-2">
        Support {item.title} initiatives for those in need.
      </p>
    </div>
  </div>
))}

        </div>
      </section>

      {/* Together Section */}
      <section className="py-12 px-6 bg-green-50 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1652858672796-960164bd632b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Helping Together" className="rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Together, We Can Make A Difference</h2>
          <p className="mb-6">Collaborate with us in bringing positive change to underprivileged communities.</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Join Us</button>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-12 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center mb-10">
    Meet The Optimistic Volunteers
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {volunteers.map((item, index) => (
      <div
        key={index}
        className="text-center bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
        />
        <h4 className="font-semibold text-lg">{item.name}</h4>
        <p className="text-gray-600 text-sm">Volunteer</p>
      </div>
    ))}
  </div>
</section>


      {/* Pricing Plans */}
      <section className="py-12 px-6 bg-green-600 text-white">
        <h2 className="text-3xl font-bold text-center mb-10">The Terms and Conditions - Select Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Basic', 'Standard', 'Premium'].map((plan, index) => (
            <div key={index} className="bg-green-700 rounded-lg p-6 hover:bg-green-800 transition">
              <h3 className="text-xl font-semibold mb-4">{plan} Plan</h3>
              <p className="mb-6">Support us with a {plan.toLowerCase()} plan.</p>
              <button className="bg-white text-green-700 px-6 py-2 rounded hover:bg-gray-100">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>
    </div>

      </>
    )
}


export default Home