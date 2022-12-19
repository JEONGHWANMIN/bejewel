import React from 'react';
import useProductsFetch from 'src/hooks/Fetch/useProductsFetch';
import styled from 'styled-components';
import LoadingSpinner from '../Common/LoadingSpiner';
import MoreButton from './MoreButton';
import ProductCard from './ProductCard';

function ProductList() {
  const { products, handleMoreData, isLoading, isLastPage } = useProductsFetch();
  return (
    <>
      <Block>
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
