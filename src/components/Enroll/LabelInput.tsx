import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Input from './Input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function LabelInput({ label, ...props }: Props) {
  const [focus, setFocus] = useState(false);
  return (
    <Block onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
      <Label focus={focus}>{label}</Label>
      <Input {...props} />
    </Block>
  );
}

export default LabelInput;

const Block = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label<{ focus?: boolean }>`
  font-size: 18px;
  font-weight: 700;
  color: gray;

  ${({ focus }) =>
    focus &&
    css`
      transition: all 0.3s ease-in-out;
      color: black;
    `}
`;
