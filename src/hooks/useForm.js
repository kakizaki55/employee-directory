import { useState } from 'react';

export const useForm = () => {
  const [form, setForm] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const clearForm = () => {
    setForm({});
  };

  return { form, handleFormChange, clearForm };
};
