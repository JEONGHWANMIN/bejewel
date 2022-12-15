import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function SubmitButton({ title, ...props }: Props) {
  return <Button {...props}>{title}</Button>;
}

export default SubmitButton;

const Button = styled.button`
  width: 80%;
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    scale: 0.98;
  }
`;
