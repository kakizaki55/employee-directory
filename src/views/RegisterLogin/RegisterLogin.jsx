import React from 'react';
import SignUpSignIn from '../../components/SignUpSignIn/SignUpSignIn';
import style from './Register.css';

export default function RegisterLogin() {
  return (
    <div className={style.formContainer}>
      <SignUpSignIn isSigningUp />
    </div>
  );
}
