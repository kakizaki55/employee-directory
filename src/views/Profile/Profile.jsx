import React from 'react';
import { useUser } from '../../context/UserContext';
import CreateEditProfile from '../CreateEditProfile/CreateEditProfile';

export default function Profile() {
  const { user } = useUser();
  console.log(user.id, user.email);
  return (
    <div>
      {user.id}
      {user.email}
      <CreateEditProfile />
    </div>
  );
}
