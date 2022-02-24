import React from 'react';
import { useUser } from '../../context/UserContext';
import style from './Header.css';

export default function Header() {
  const { user } = useUser();
  console.log(user);
  return (
    <header className={style.header}>
      <span>Employee Directory</span>
      <button>sign up</button>
    </header>
  );
}
