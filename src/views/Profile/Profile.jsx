import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Profile() {
  const { user } = useUser();
  console.log(user);
  return <div>Profile</div>;
}
