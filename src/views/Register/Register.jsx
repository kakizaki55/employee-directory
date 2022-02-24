import React from 'react';
import SignUpSignIn from '../../components/SignUpSignIn/SignUpSignIn';
import style from './Register.css';

export default function Register() {
  return (
    <div className={style.formContainer}>
      <SignUpSignIn />
    </div>
  );
}
