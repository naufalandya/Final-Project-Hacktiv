import React from "react";
import CartItem from "../atoms/CartItem";

type CartItemType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image : string;
};

type CartListProps = {
  items: CartItemType[];
  updateQuantity: (id: number, quantity: number) => void;
};

const CartList: React.FC<CartListProps> = ({ items, updateQuantity }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          quantity={item.quantity}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
  );
};

export default CartList;
