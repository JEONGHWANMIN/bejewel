import Layout from 'src/components/Layout/Layout';
import styled from 'styled-components';
import ProductList from 'src/components/Home/ProductList';

function Home() {
  return (
    <Layout>
      <Container>
        <Title>상품 목록</Title>
        <ProductList />
      </Container>
    </Layout>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin: 30px;
`;
