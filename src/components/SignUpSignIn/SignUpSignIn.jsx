import React from 'react';
import { useState } from 'react';
import style from './SignUpSignIn.css';

export default function SignUpSignIn() {
  const [userInput, setUserInput] = useState({});
  return (
    <div>
      <form className={style.form}>
        <label className={style.label} htmlFor="email">
          Email :
          <input type="email" name="email" />
        </label>
        <label className={style.label} htmlFor="password">
          Password :
          <input type="password" name="password" />
        </label>
        <button>register</button>
      </form>
    </div>
  );
}
