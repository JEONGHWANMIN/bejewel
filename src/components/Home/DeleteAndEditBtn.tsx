import { useNavigate } from 'react-router-dom';
import { deleteProduct } from 'src/apis/product';
import styled from 'styled-components';

interface Props {
  productId: string;
}

function DeleteAndEditBtn({ productId }: Props) {
  const navigate = useNavigate();
  return (
    <Block>
      <EditButton onClick={() => navigate(`/edit/${productId}`)}>수정</EditButton>
      <DeleteButton
        onClick={async () => {
          if (!window.confirm('정말 삭제하시겠습니까?')) return;
          const result = await deleteProduct(productId);
          if (result.status === 200) {
            alert('삭제되었습니다.');
            navigate('/');
          }
        }}
      >
        삭제
      </DeleteButton>
    </Block>
  );
}

export default DeleteAndEditBtn;

const Block = styled.div`
  display: flex;
  gap: 5px;
`;

const EditButton = styled.span`
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;
`;
const DeleteButton = styled.span`
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;
`;
