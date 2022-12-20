import styled, { css } from 'styled-components';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { type Category } from 'src/types/product';
import useDropDown from 'src/hooks/Enroll/useDropDown';

const Categorys: Category[] = ['팔찌', '목걸이', '반지', '귀걸이'];

interface Props {
  category: string;
  handleCategoryChange: (value: Category) => void;
}

function DropDownCtg({ category, handleCategoryChange }: Props) {
  const { isDrop, ref, handleDropClick } = useDropDown();
  return (
    <DropBlock ref={ref}>
      <Label isDrop={isDrop}>카테고리</Label>
      <Value onClick={() => handleDropClick()}>
        {category ? <IsValue>{category}</IsValue> : <NoValue>선택</NoValue>} <MdOutlineArrowDropDown size={28} />
      </Value>
      {isDrop && (
        <DropList>
          {Categorys.map((item) => (
            <DropItem
              onClick={() => {
                handleCategoryChange(item);
                handleDropClick(false);
              }}
            >
              {item}
            </DropItem>
          ))}
        </DropList>
      )}
    </DropBlock>
  );
}

export default DropDownCtg;

const DropBlock = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<{ isDrop: boolean }>`
  font-size: 18px;
  font-weight: 700;
  color: gray;

  ${({ isDrop }) =>
    isDrop &&
    css`
      transition: all 0.3s ease-in-out;
      color: black;
    `}
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  border: none;
  border-bottom: solid 3px lightgray;
  font-size: 15px;
  color: gray;
  cursor: pointer;
`;

const IsValue = styled.span`
  color: black;
`;

const NoValue = styled.span`
  color: lightgray;
`;

const DropList = styled.div`
  position: absolute;
  top: 75px;
  left: 0;
  width: 50%;
  height: 100px;
  border: solid 1px lightgray;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  padding: 10px;
  animation: growDown 250ms ease-in;
  transform-origin: top center;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

const DropItem = styled.div`
  padding: 3px 0;
  font-size: 14px;
  font-weight: 700;
  color: gray;
  width: 100%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e9e6e6;
    color: black;
  }
`;
