import React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function CheckBox({ ...props }: Props) {
  const uniqueID = `checkbox-${0}`;
  return (
    <Block>
      <input id={uniqueID} type={"checkbox"} {...props}></input>
      <label htmlFor={uniqueID}></label>
    </Block>
  );
}

export default CheckBox;

const Block = styled.div`
  width: fit-content;
  height: 20px;

  input[type="checkbox"] {
    display: none;
    width: 20px;
    height: 20px;
  }

  label {
    width: 20px;
    height: 20px;
    border: solid 1px black;
    display: inline-block;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label {
    background-color: black;
    transition: all 0.2s ease-in-out;
  }

  input[type="checkbox"]:checked + label:after {
    transition: all 0.2s ease-in-out;
    content: "✔";
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
  }
`;
