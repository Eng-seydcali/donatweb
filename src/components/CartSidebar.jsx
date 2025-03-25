import React from "react";

const CartSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <button
        className="absolute top-4 right-4 text-xl"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
      <h2 className="text-xl font-bold mb-4">Shopping cart</h2>
      <p className="mb-4">Subtotal: <strong>$0.00</strong></p>
      <div className="flex gap-4">
        <button className="bg-teal-800 text-white px-4 py-2 rounded-full">View cart</button>
        <button className="bg-teal-800 text-white px-4 py-2 rounded-full">Checkout</button>
      </div>
    </div>
  );
};

export default CartSidebar;
