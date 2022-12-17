import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function MoreButton({ ...props }: Props) {
  return <Button {...props}>MoreItems</Button>;
}

export default MoreButton;

const Button = styled.button`
  margin: auto;
  width: 200px;
  height: 50px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 16px;
  font-weight: 900;
  color: #353434;
  cursor: pointer;
`;
