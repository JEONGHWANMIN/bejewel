import useForm from "src/hooks/Enroll/useForm";
import styled from "styled-components";
import FileUpload from "./FileUpload";
import LabelCheckBox from "./LabelCheckBox";
import LabelInput from "./LabelInput";
import SubmitButton from "./SubmitButton";

function ProductForm() {
  const { form, error, handleChange, handleSubmit, handleFileChange } =
    useForm();

  return (
    <Form onSubmit={handleSubmit}>
      <FileUpload url={form.url} handleFileChange={handleFileChange} />
      <LabelInput
        name="brand"
        label={"브랜드"}
        onChange={handleChange}
        value={form.brand}
      />
      <LabelInput
        name="name"
        label={"상품명"}
        onChange={handleChange}
        value={form.name}
      />
      <LabelInput
        name="price"
        label={"가격"}
        onChange={handleChange}
        value={form.price}
        placeholder={"2000원"}
      />
      <LabelCheckBox
        name="freeDelivery"
        onChange={handleChange}
        checked={form.freeDelivery}
      />
      <SubmitButton title="상품등록" />
      {error && <Error>모든 항목을 입력해주세요.</Error>}
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

const Error = styled.div`
  color: red;
  font-size: 20px;
  font-weight: 600;
`;
