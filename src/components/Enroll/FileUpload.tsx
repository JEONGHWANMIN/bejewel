import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import styled from "styled-components";

interface Props {
  url: string | ArrayBuffer;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FileUpload({ url, handleFileChange }: Props) {
  return (
    <FileBlock>
      <label htmlFor="dogImg">
        <BsPlusCircleFill color="white" size={50} />
        {url && <img src={String(url)} alt="preview" />}
      </label>
      <input
        type="file"
        id="dogImg"
        onChange={handleFileChange}
        accept=".png, .jpg, .jpeg"
        multiple
      />
    </FileBlock>
  );
}

export default FileUpload;

const FileBlock = styled.div`
  position: relative;
  width: 150px;

  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: lightgray;
    font-size: 30px;
    color: lightgray;

    &:hover::after {
      content: "이미지 등록";
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
