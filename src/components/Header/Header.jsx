import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../../services/users';
import style from './Header.css';

export default function Header() {
  const history = useHistory();
  const handleSignUpButton = () => {
    history.push('/register');
  };
  const handleLoginButton = () => {
    history.push('/login');
  };
  const handleLogoutButton = () => {
    signOutUser();
    history.push('/');
  };
  return (
    <header className={style.header}>
      <span>Employee Directory</span>
      <div>
        <button onClick={handleLoginButton}>login</button>
        <button onClick={handleSignUpButton}>sign up</button>
        <button onClick={handleLogoutButton}>logout</button>
      </div>
    </header>
  );
}
