import React from "react";
import CartList from "../molecules/CartList";
import CartSummary from "../organisms/CartSummary";
import useCart from "../hooks/useCart";

const Cart: React.FC = () => {
  const { cart, updateQuantity } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <>
          <CartList items={cart} updateQuantity={updateQuantity} />
          <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
        </>
      )}
    </div>
  );
};

export default Cart;
