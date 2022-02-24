import React from 'react';
import { useEffect } from 'react';
import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

export default function CreateEditProfileForm() {
  //   const { profileObj, setProfileObj } = useProfile();
  const { user } = useUser();
  console.log(user.email);

  const { form, handleFormChange, clearForm } = useForm({
    email: user.email || '',
  });

  useEffect(() => {
    clearForm();
  }, []);

  console.log('form', form);
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
            {/* need a way to get rid of the console error */}
            <input
              type="email"
              name="birthday"
              value={user.email}
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
