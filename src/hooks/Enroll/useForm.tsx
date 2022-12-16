import React, { useState } from "react";

interface Form {
  url: string | ArrayBuffer;
  brand: string;
  name: string;
  price: string;
  freeDelivery: boolean;
}

function useForm() {
  const [error, setError] = useState(false);
  const [form, setForm] = useState<Form>({
    url: "",
    brand: "",
    name: "",
    price: "",
    freeDelivery: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

    if (error) setError(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return alert("파일이 없습니다.");
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { brand, name, price, url } = form;

    if (!brand || !name || !price || !url) {
      setError(true);
      return;
    }

    console.log(form);
  };

  return { form, error, handleChange, handleSubmit, handleFileChange };
}

export default useForm;
