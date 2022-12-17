import useProductsFetch from 'src/hooks/Home/useProductsFetch';
import styled from 'styled-components';
import LoadingSpinner from '../Common/LoadingSpiner';
import MoreButton from './MoreButton';
import ProductCard from './ProductCard';

function ProductList() {
  const { products, handleMoreData, isLoading, isLastPage } = useProductsFetch();
  console.log(products);
  return (
    <>
      <Block>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Block>
      <CenterBlock>
        {!isLastPage && <MoreButton onClick={handleMoreData} />}
        {isLoading && <LoadingSpinner />}
      </CenterBlock>
    </>
  );
}

export default ProductList;

const Block = styled.div`
  padding: 0 103px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (max-width: 768px) {
    & {
      justify-content: center;
      gap: 15px;
    }
  }
`;

const CenterBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;
