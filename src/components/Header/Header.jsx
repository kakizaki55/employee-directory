import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signOutUser } from '../../services/users';
import style from './Header.css';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user, setShouldRender } = useUser();

  const history = useHistory();
  const handleSignUpButton = () => {
    history.push('/register');
  };
  const handleLoginButton = () => {
    history.push('/login');
  };
  const handleLogoutButton = () => {
    signOutUser();
    setShouldRender(true);
    history.push('/');
  };
  return (
    <header className={style.header}>
      <span>ACME Employee Directory</span>
      <div>
        <button onClick={handleLoginButton}>login</button>
        <button onClick={handleSignUpButton}>sign up</button>
        {user.email ? (
          <button onClick={handleLogoutButton}>logout</button>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
