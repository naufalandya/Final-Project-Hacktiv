import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../atoms/PopupCheckout";

type CartSummaryProps = {
  totalItems: number;
  totalPrice: number;
};

const CartSummary: React.FC<CartSummaryProps> = ({ totalItems, totalPrice }) => {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const handleCheckout = () => {
    localStorage.removeItem("cart");

    setMessage("Checkout Successful!");
    setCheckoutSuccess(true);

    setTimeout(() => {
      setCheckoutSuccess(false);  
      navigate("/");
    }, 3000);
  };

  const handleClosePopup = () => {
    setCheckoutSuccess(false);  
  };

  return (
    <div className="bg-gray-100 p-4 mt-4 rounded-md relative">
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Total Items</p>
        <p className="text-lg">{totalItems}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-lg font-semibold">Total Price</p>
        <p className="text-lg">${totalPrice.toFixed(2)}</p>
      </div>
      <button
        onClick={handleCheckout}
        className="w-full bg-green-500 text-white py-2 mt-4 rounded-md hover:bg-green-600"
      >
        Checkout
      </button>

      {checkoutSuccess && (
        <Popup
          message={message}
          subMessage="Redirecting to home page..."
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default CartSummary;
