import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import style from './Header.css';

export default function Header() {
  const history = useHistory();
  const handleButton = () => {
    history.push('/register');
  };
  return (
    <header className={style.header}>
      <span>Employee Directory</span>
      <button onClick={handleButton}>sign up</button>
    </header>
  );
}
