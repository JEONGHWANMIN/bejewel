import Layout from 'src/components/Layout/Layout';
import styled from 'styled-components';
import ProductForm from 'src/components/Enroll/ProductForm';

function Enroll() {
  return (
    <Layout>
      <Container>
        <Title>상품 등록하기</Title>
        <ProductForm />
      </Container>
    </Layout>
  );
}

export default Enroll;

const Container = styled.div`
  margin: auto;
  border: solid 1px lightgray;
  width: 560px;
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
