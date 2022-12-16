import React from "react";
import { useLoaderData } from "react-router-dom";
import { Product } from "src/types/product";
import styled from "styled-components";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = useLoaderData() as Product[];
  console.log("ProductList ,Data", products);
  return (
    <Block>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Block>
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
