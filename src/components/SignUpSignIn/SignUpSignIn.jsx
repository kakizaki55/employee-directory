import React from 'react';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import style from './SignUpSignIn.css';
import { getUser, signUpUser, signInUser } from '../../services/users';
import { useHistory } from 'react-router-dom';

export default function SignUpSignIn({ isSigningUp = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const { user, setUser } = useUser();

  const handleForm = (e) => {
    e.preventDefault();
    signInUser(email, password);
    history.replace('/profile');
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleForm}>
        <label className={style.label} htmlFor="email">
          Email :
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={style.label} htmlFor="password">
          Password :
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>sign in</button>
      </form>
    </div>
  );
}
