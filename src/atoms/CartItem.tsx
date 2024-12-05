import React from "react";
import InputNumber from "../atoms/InputNumber";

type CartItemProps = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  image: string;
  updateQuantity: (id: number, quantity: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({ id, title, quantity, price = 0, image, updateQuantity }) => {
  const handleQuantityChange = (value: number) => {
    updateQuantity(id, value);
  };

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-start space-x-6">
        <img src={image} alt="" className="w-11 h-11 object-cover" />
        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-gray-500 text-sm">${price.toFixed(2)} each</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <InputNumber value={quantity} onChange={handleQuantityChange} />
        <p className="font-semibold">${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
