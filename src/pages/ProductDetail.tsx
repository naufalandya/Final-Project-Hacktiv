import React from "react";
import { useParams } from "react-router-dom";
import { useProductDetail } from "../hooks/useProductDetail";
import ProductActions from "../organisms/ProductActions";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const productId = id ? parseInt(id) : 0;
  const { product, loading, error } = useProductDetail(productId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found.</div>;

  const { title, price, description, category, image, rating } = product;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-center items-center mb-6">
        <img
          src={image}
          alt={title}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain rounded-md"
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-2xl sm:text-3xl text-gray-800">{title}</h3>
        <p className="text-lg text-gray-700 font-semibold">${price}</p>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{category}</p>

        <div className="flex items-center text-sm text-gray-500 space-x-2">
          <span className="flex items-center">
            {Array.from({ length: Math.floor(rating.rate) }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5 text-yellow-500"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.147 3.533h3.713c.969 0 1.371 1.24.588 1.81l-3.007 2.183 1.147 3.534c.3.92-.755 1.688-1.54 1.118L10 13.011l-3.008 2.184c-.784.57-1.838-.198-1.539-1.118l1.147-3.534-3.007-2.183c-.784-.57-.38-1.81.588-1.81h3.713L9.049 2.927z" />
              </svg>
            ))}
          </span>
          <span className="text-gray-600">({rating.count} reviews)</span>
        </div>

        <ProductActions id={productId} title={title} price={price} stock={120} image={image}/>
        </div>
    </div>
  );
};

export default ProductDetail;
