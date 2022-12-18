import { type Product } from 'src/types/product';
import { currencyPrice } from 'src/utils/utill';
import styled from 'styled-components';
import DeleteAndEditBtn from './DeleteAndEditBtn';
import FreeShipTag from './FreeShipTag';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <Block>
      <Image src={String(product.url)} alt="product-image" />
      <BrandAndBtn>
        <Brand>{product.brand}</Brand>
        <DeleteAndEditBtn productId={product.id} />
      </BrandAndBtn>
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

const BrandAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
