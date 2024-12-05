import { useState } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image : string;
};

const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const saveCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = (item: CartItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + item.quantity);
    } else {
      saveCart([...cart, item]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    saveCart(updatedCart);
  };

  return { cart, addToCart, updateQuantity };
};

export default useCart;
