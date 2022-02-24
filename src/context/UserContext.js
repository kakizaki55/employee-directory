import { useContext, createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1234151235,
    email: 'Minoka@gmail.com',
    about: 'some info about me',
  });
};
