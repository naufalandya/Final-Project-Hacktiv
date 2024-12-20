import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("authToken");

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <header className="bg-gray-200 p-5 flex justify-between items-center shadow">
      <h1 className="text-2xl font-semibold text-gray-800">pokole</h1>
      
      <nav className="flex space-x-4">
        <Link to="/" className="text-gray-800 hover:text-gray-900 hover:underline">
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="text-gray-800 hover:text-gray-900 hover:underline">
              Profile
            </Link>
            <Link to="/cart" className="text-gray-800 hover:text-gray-900 hover:underline">
              Cart
            </Link>
            <button
              onClick={handleSignOut}
              className="hover:underline"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
