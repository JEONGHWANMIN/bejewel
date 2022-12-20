import { useParams } from 'react-router-dom';
import ProductForm from 'src/components/Enroll/ProductForm';
import Layout from 'src/components/Layout/Layout';
import useProductFetch from 'src/hooks/Fetch/useProductFetch';
import styled from 'styled-components';

function Edit() {
  const { id } = useParams();
  const { product } = useProductFetch(id!);
  return (
    <Layout>
      <Container>
        <Title>상품 등록하기</Title>
        <ProductForm product={product} />
      </Container>
    </Layout>
  );
}

export default Edit;

const Container = styled.div`
  border: solid 1px lightgray;
  width: 560px;
  margin: auto;
  margin-top: 2%;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;
