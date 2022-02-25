import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import { createProfile, updateProfile } from '../../services/profiles';
import { getProfile } from '../../services/profiles';

export default function CreateEditProfileForm({ isEditing = false }) {
  const { setShouldQuery } = useProfile();

  const { user } = useUser();
  const history = useHistory();

  const { form, handleFormChange, clearForm, setForm } = useForm({
    email: user.email || '',
  });
  console.log('form', form);
  useEffect(() => {
    if (isEditing) {
      const fetchProfile = async () => {
        const response = await getProfile();
        console.log('response', response);
        setForm(response);
      };
      fetchProfile();
    } else {
      clearForm();
    }
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateProfile(form);
      history.push('/profile');
      setShouldQuery(true);
    } else {
      createProfile(form);
      history.replace('/profile');
    }
  };
  return (
    <div>
      <h1>CreateEditProfileForm</h1>
      <form onSubmit={handleForm}>
        <section>
          <label htmlFor="name">
            <span>name :</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormChange}
            />
          </label>
        </section>
        <section>
          <label htmlFor="email">
            <span>email :</span>
            <input
              type="email"
              name="email"
              defaultValue={form.email}
              onChange={handleFormChange}
              disabled
            />
          </label>
        </section>
        <section>
          <label htmlFor="birthday">
            <span>birthday :</span>
            <input
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={handleFormChange}
            />
          </label>
        </section>
        <section>
          <label htmlFor="bio">
            <span>About me :</span>
            <textarea
              type="text"
              name="bio"
              value={form.bio}
              onChange={handleFormChange}
            />
          </label>
        </section>
        <button>Submit</button>
      </form>
    </div>
  );
}
