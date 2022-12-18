import useForm from 'src/hooks/Enroll/useForm';
import { type CreateProduct, type Product } from 'src/types/product';
import styled from 'styled-components';
import FileUpload from './FileUpload';
import LabelCheckBox from './LabelCheckBox';
import LabelInput from './LabelInput';
import SubmitButton from './SubmitButton';

interface Props {
  product?: Product;
}
const initialData: CreateProduct = {
  url: '',
  brand: '',
  name: '',
  price: 0,
  freeDelivery: false,
};

function ProductForm({ product }: Props) {
  const { form, error, handleChange, handleSubmit, handleFileChange } = useForm({
    product: product || initialData,
    type: product ? 'edit' : 'create',
    productId: product?.id,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <FileUpload url={form.url} handleFileChange={handleFileChange} />
      <LabelInput name="brand" label={'브랜드'} onChange={handleChange} value={form.brand} />
      <LabelInput name="name" label={'상품명'} onChange={handleChange} value={form.name} />
      <LabelInput
        type={'number'}
        name="price"
        label={'가격'}
        onChange={handleChange}
        value={form.price}
        placeholder={'숫자만 입력해 주세요. 예) 10000'}
      />
      <LabelCheckBox name="freeDelivery" onChange={handleChange} checked={form.freeDelivery} />
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
