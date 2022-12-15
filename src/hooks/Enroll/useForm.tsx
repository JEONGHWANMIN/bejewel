import React, { useEffect, useState } from "react";

interface Form {
  url: string | ArrayBuffer;
  brand: string;
  name: string;
  price: string;
  freeDelivery: boolean;
}

function useForm() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [fileDataURL, setFileDataURL] = useState<any>(null);
  const [form, setForm] = useState<Form>({
    url: "",
    brand: "",
    name: "",
    price: "",
    freeDelivery: false,
  });

  useEffect(() => {
    let fileReader: FileReader,
      isCancel = false;
    if (selectedFile) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target as FileReader;
        if (result && !isCancel) {
          setForm({
            ...form,
            url: result,
          });
        }
      };
      fileReader.readAsDataURL(selectedFile);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [selectedFile]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return { form, onChange, onSubmit };
}

export default useForm;
