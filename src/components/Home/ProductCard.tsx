import { useNavigate } from 'react-router';
import { type Product } from 'src/types/product';
import { currencyPrice } from 'src/utils/utill';
import styled from 'styled-components';
import FreeShipTag from './FreeShipTag';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const navigate = useNavigate();
  return (
    <Block onClick={() => navigate(`/detail/${product.id}`)}>
      <Image src={String(product.url)} alt="product-image" />
      <Category>{product.category}</Category>
      <Brand>{product.brand}</Brand>
      <Name>{product.name}</Name>
      <PriceTagBox>
        <Price>
          <span>{currencyPrice(product.price)}</span>원
        </Price>
        {product.freeDelivery && <FreeShipTag />}
      </PriceTagBox>
    </Block>
  );
}

export default ProductCard;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  font-size: 16px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 310px;
`;

const Category = styled.p`
  font-size: 14px;
  color: #555454;
  margin: 4px 0;
`;

const Brand = styled.p`
  font-weight: 900;
  margin: 8px 0;
`;

const Name = styled.p`
  color: #353434;
  margin-bottom: 15px;
`;

const Price = styled.p`
  font-weight: 300;
  font-size: 14px;

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const PriceTagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
