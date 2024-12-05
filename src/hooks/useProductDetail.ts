import { useState, useEffect } from 'react';
import { fetchProductDetail } from '../api/fetchProductDetail';
import { ProductDetail } from '../types/ProductDetail';

export const useProductDetail = (id: number) => {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const data = await fetchProductDetail(id);
        setProduct(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getProductDetail();
  }, [id]);

  return { product, loading, error };
};
