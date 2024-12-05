import React, { useState } from "react";
import Button from "../atoms/Button";
import InputNumber from "../atoms/InputNumber";
import useCart from "../hooks/useCart";
import Popup from "../atoms/Popup";

type ProductActionsProps = {
  id: number;
  title: string;
  price: number;
  stock: number;
  image: string;
};

const ProductActions: React.FC<ProductActionsProps> = ({ id, title, price, stock, image }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const { addToCart, updateQuantity } = useCart();

  const handleAddToCart = () => {
    if (quantity > stock) {
      setShowPopup(true);
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingItem = cart.find((item: { id: number }) => item.id === id);

      if (existingItem) {
        updateQuantity(id, existingItem.quantity + quantity);
      } else {
        addToCart({ id, title, price, quantity, image });
      }

      alert(`${title} added to cart with quantity ${quantity}!`);
    }
  };

  const handleBuyNow = () => {
    if (quantity > stock) {
      setShowPopup(true);
    } else {
      alert(`You are buying ${quantity} of ${title} at $${price} each!`);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="quantity" className="font-medium">
          Quantity:
        </label>
        <InputNumber value={quantity} onChange={setQuantity} />

        <p>Stock : {stock}</p>
      </div>

      <div className="flex space-x-4">
        <Button text="Add to Cart" onClick={handleAddToCart} />
        <Button
          text="Buy Now"
          onClick={handleBuyNow}
          className="bg-green-500 hover:bg-green-600"
        />
      </div>

      {showPopup && (
        <Popup
          message={`You cannot add more than ${stock} items of ${title} to your cart.`}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default ProductActions;
