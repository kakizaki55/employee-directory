import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { UserProvider } from '../../context/UserContext';
import { ProfileProvider } from '../../context/ProfileContext';

export default function Layout({ children }) {
  return (
    <UserProvider>
      <ProfileProvider>
        <Header />
        {children}
        <Footer />
      </ProfileProvider>
    </UserProvider>
  );
}
