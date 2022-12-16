import Layout from "src/components/Layout/Layout";
import styled from "styled-components";
import ProductList from "src/components/Home/ProductList";

function Home() {
  return (
    <Layout>
      <Container>
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
