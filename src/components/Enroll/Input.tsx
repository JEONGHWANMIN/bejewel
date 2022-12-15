import React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...props }: Props) {
  return <StyleInput {...props} />;
}

export default Input;

const StyleInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: solid 3px lightgray;
  padding: 0 10px;
  font-size: 15px;

  &:focus {
    outline: none;
    border-bottom: solid 3px black;
    transition: all 0.3s ease-in-out;
  }

  &::placeholder {
    font-size: 15px;
  }
`;
