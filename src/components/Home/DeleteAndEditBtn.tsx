import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  productId: string;
}

function DeleteAndEditBtn({ productId }: Props) {
  const navigate = useNavigate();
  return (
    <Block>
      <span onClick={() => navigate(`/edit/${productId}`)}>수정</span>
      <span>삭제</span>
    </Block>
  );
}

export default DeleteAndEditBtn;

const Block = styled.div`
  display: flex;
  gap: 5px;

  span {
    font-size: 14px;
    font-weight: 300;
    color: #353434;
    cursor: pointer;
  }
`;
