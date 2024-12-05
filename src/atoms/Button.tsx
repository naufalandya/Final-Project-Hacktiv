import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
