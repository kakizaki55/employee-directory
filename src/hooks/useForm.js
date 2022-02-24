import { useState } from 'react';
import { useUser } from '../context/UserContext';

export const useForm = () => {
  const [form, setForm] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const { user } = useUser();
  const clearForm = () => {
    setForm({ email: user.email });
  };

  return { form, handleFormChange, clearForm };
};
