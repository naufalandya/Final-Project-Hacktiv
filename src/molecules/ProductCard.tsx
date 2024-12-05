import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";

type ProductCardProps = Pick<Product, "id" | "title" | "price" | "image" | "description" | "category">;

const truncateDescription = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image, description, category }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${title.replace(/\s+/g, '-').toLowerCase()}/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="border rounded-md shadow-md p-4 flex flex-col h-full cursor-pointer transition-transform duration-200 hover:outline hover:outline-blue-500 hover:scale-105"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      
      <div className="flex flex-col flex-grow justify-between mt-4">

        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>

        <p className="text-sm text-gray-500 line-clamp-3">{truncateDescription(description, 70)}</p>
    
        <div className="flex justify-between items-center mt-2">
          <p className="inline text-white bg-gray-800 py-1 px-2 text-sm">{category}</p>
        </div>
        
        <p className="text-gray-600 mt-2">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
