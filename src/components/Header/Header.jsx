import React from 'react';
import style from './Header.css';

export default function Header() {
  return (
    <header className={style.header}>
      <span>Employee Directory</span>
      <button>sign up</button>
    </header>
  );
}
