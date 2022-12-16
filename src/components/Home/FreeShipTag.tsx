import styled from "styled-components";

function FreeShipTag() {
  return <Block>무료배송</Block>;
}

export default FreeShipTag;

const Block = styled.div`
  background-color: black;
  color: white;
  width: fit-content;
  font-size: 14px;
  padding: 4px;
`;
