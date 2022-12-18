import { useEffect, useState } from 'react';
import { getProduct } from 'src/apis/product';
import { type Product } from 'src/types/product';

function useProductFetch(id: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setIsLoading(true);
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
    setIsLoading(false);
  }, [id]);

  return {
    product,
    isLoading,
  };
}

export default useProductFetch;
