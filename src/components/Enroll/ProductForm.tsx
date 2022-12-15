import React from "react";
import useForm from "src/hooks/Enroll/useForm";
import styled from "styled-components";
import FileUpload from "./FileUpload";
import LabelCheckBox from "./LabelCheckBox";
import LabelInput from "./LabelInput";
import SubmitButton from "./SubmitButton";

function ProductForm() {
  const { form, onChange, onSubmit } = useForm();

  return (
    <Form onSubmit={onSubmit}>
      <FileUpload url={form.url} />
      <LabelInput
        name="brand"
        label={"브랜드"}
        onChange={onChange}
        value={form.brand}
      />
      <LabelInput
        name="name"
        label={"상품명"}
        onChange={onChange}
        value={form.name}
      />
      <LabelInput
        name="price"
        label={"가격"}
        onChange={onChange}
        value={form.price}
        placeholder={"2000원"}
      />
      <LabelCheckBox
        name="freeDelivery"
        onChange={onChange}
        checked={form.freeDelivery}
      />
      <SubmitButton title="상품등록" />
    </Form>
  );
}

export default ProductForm;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
