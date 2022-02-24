import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Profile() {
  const { user } = useUser();
  console.log(user.id, user.email);
  return <div>Profile</div>;
}
