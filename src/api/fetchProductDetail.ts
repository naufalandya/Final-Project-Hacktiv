import { ProductDetail } from '../types/ProductDetail';

export const fetchProductDetail = async (id: number): Promise<ProductDetail> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product detail');
  }
  return response.json();
};
