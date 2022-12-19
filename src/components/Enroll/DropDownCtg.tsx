import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { type Category } from 'src/types/product';

const Categorys: Category[] = ['팔찌', '목걸이', '반지', '귀걸이'];

interface Props {
  category: string;
  handleCategoryChange: (value: Category) => void;
}

function DropDownCtg({ category, handleCategoryChange }: Props) {
  const [focus, setFocus] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsDrop(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  return (
    <DropBlock ref={ref} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
      <Label focus={focus}>카테고리</Label>
      <Value onClick={() => setIsDrop(!isDrop)}>
        <span>{category || '선택'}</span> <MdOutlineArrowDropDown size={28} />
      </Value>
      {isDrop && (
        <DropList>
          {Categorys.map((item) => (
            <DropItem
              onClick={() => {
                handleCategoryChange(item);
                setIsDrop(false);
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

const Label = styled.label<{ focus: boolean }>`
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
  color: gray;

  ${({ focus }) =>
    focus &&
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
  height: 40px;
  border: none;
  padding-left: 10px;
  border-bottom: solid 3px lightgray;
  font-size: 15px;
  color: gray;
  cursor: pointer;
`;

const DropList = styled.div`
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  height: 100px;
  border: solid 1px lightgray;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  padding: 10px;
`;

const DropItem = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: gray;
  width: 100%;
  border: none;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
