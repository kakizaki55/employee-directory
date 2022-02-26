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
            aria-label="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={style.label} htmlFor="password">
          Password :
          <input
            aria-label="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {isSigningUp ? <button>sign up</button> : <button>sign in</button>}
      </form>
    </div>
  );
}
