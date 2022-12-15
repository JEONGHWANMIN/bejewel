import React from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import { Label } from "./LabelInput";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function LabelCheckBox({ ...props }: Props) {
  return (
    <Block>
      <Label>무료배송</Label>
      <CheckBox {...props} />
    </Block>
  );
}

export default LabelCheckBox;

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 80%;
`;
