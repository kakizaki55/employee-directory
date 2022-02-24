import React from 'react';
import { useEffect } from 'react';
import { useProfile } from '../../context/ProfileContext';
import { useForm } from '../../hooks/useForm';

export default function CreateEditProfileForm() {
  //   const { profileObj, setProfileObj } = useProfile();

  const { form, handleFormChange, clearForm } = useForm();
  console.log('form', form);

  useEffect(() => {
    clearForm();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    console.log('clicky inside handle form');
  };
  return (
    <div>
      <h1>CreateEditProfileForm</h1>
      <form onSubmit={handleForm}>
        <section>
          <label htmlFor="name">
            <span>name :</span>
            <input type="text" name="name" onChange={handleFormChange} />
          </label>
        </section>
        <section>
          <label htmlFor="birthday">
            <span>birthday :</span>
            <input type="date" name="birthday" onChange={handleFormChange} />
          </label>
        </section>
        <section>
          <label htmlFor="bio">
            <span>About me :</span>
            <textarea type="text" name="bio" onChange={handleFormChange} />
          </label>
        </section>
        <button>Submit</button>
      </form>
    </div>
  );
}
