import { useEffect, useState } from 'react';
import { getProducts } from 'src/apis/product';
import { type Product } from 'src/types/product';

function useProductsFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      const data = await getProducts(page);
      setProducts([...products, ...data.products]);
      setTotalPage(data.totalPage);
    };
    fetchProducts();
    setIsLoading(false);
  }, [page]);

  const handleMoreData = () => {
    setPage(page + 1);
  };

  const isLastPage = page === totalPage;

  return {
    products,
    isLoading,
    handleMoreData,
    isLastPage,
  };
}

export default useProductsFetch;
