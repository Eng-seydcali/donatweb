import React, { useState } from 'react'
import Header from '../components/Header';
import CartSidebar from '../components/CartSidebar';
import MobileMenu from '../components/MobileMenu';


function Contact() {
 const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
     <div className="relative">
    <Header setIsCartOpen={setIsCartOpen} setIsMenuOpen={setIsMenuOpen}/>
    <CartSidebar isOpen={isCartOpen} setIsOpen={setIsCartOpen}/>
    <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>

    
    
    </div>
    </>
  )
}

export default Contact