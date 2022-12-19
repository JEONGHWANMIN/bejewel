import Layout from 'src/components/Layout/Layout';
import { useParams } from 'react-router';
import useProductFetch from 'src/hooks/Fetch/useProductFetch';
import { currencyPrice } from 'src/utils/utill';
import styled from 'styled-components';
import DeleteAndEditBtn from 'src/components/Home/DeleteAndEditBtn';
import FreeShipTag from 'src/components/Home/FreeShipTag';
import LoadingSpinner from 'src/components/Common/LoadingSpiner';

function Detail() {
  const { id } = useParams();
  const { product, isLoading } = useProductFetch(id!);

  if (isLoading || !product) return <LoadingSpinner />;

  return (
    <Layout>
      <Container>
        <LeftBox>
          <img src={String(product.url)} alt="상품 이미지" />
        </LeftBox>
        <RightBox>
          {product.freeDelivery && <FreeShipTag />}
          <Category>{product.category}</Category>
          <Brand>{product.brand}</Brand>
          <Name>{product.name}</Name>
          <Price>{currencyPrice(product.price)}원</Price>
          <DeleteAndEditBtn productId={product.id} />
        </RightBox>
      </Container>
    </Layout>
  );
}

export default Detail;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: auto;
  gap: 20px;
  margin-top: 10px;
  padding: 30px;
  border: solid 1px lightgray;
`;

const LeftBox = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: 400px;
  }
`;

const RightBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Category = styled.p`
  font-size: 14px;
  color: #555454;
  margin: 4px 0;
`;

const Brand = styled.p`
  font-size: 24px;
  font-weight: 900;
  margin: 8px 0;
`;

const Name = styled.p`
  font-size: 24px;
  color: #353434;
  margin-bottom: 15px;
`;

const Price = styled.p`
  font-size: 24px;
  color: #353434;
  margin-bottom: 15px;
`;
