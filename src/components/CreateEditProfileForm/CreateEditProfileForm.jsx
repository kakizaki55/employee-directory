import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import { createProfile } from '../../services/profiles';

export default function CreateEditProfileForm() {
  const { profileObj, setProfileObj } = useProfile();
  const { user } = useUser();

  const history = useHistory();

  const { form, handleFormChange, clearForm } = useForm({
    email: user.email || '',
  });

  useEffect(() => {
    clearForm();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    createProfile(form);
    history.replace('/profile');
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
