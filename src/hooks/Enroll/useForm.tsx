import { ChangeEvent, FormEvent, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct, editProduct } from 'src/apis/product';
import { type Product, type CreateProduct } from 'src/types/product';

interface Props {
  product: Product | CreateProduct;
  type: 'edit' | 'create';
  productId?: string;
}

function useForm({ product, type, productId }: Props) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [form, setForm] = useState<Product | CreateProduct>(product);

  useLayoutEffect(() => {
    setForm(product);
  }, [product]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });

    if (error) setError(false);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return alert('파일이 없습니다.');
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const { result } = e.target as FileReader;
      if (result) {
        setForm({
          ...form,
          url: result,
        });
      }
    };
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { brand, name, price, url } = form;

    if (!brand || !name || !price || !url) {
      setError(true);
      return;
    }

    let result;
    if (type === 'edit' && productId) {
      result = await editProduct(productId, form);
    } else {
      result = await createProduct(form);
    }

    if (result.status === 200) {
      window.alert('상품이 등록되었습니다.');
      navigate('/');
    }
  };

  return { form, error, handleChange, handleSubmit, handleFileChange };
}

export default useForm;
