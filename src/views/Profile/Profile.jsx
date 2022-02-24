import React from 'react';
import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';
import CreateEditProfile from '../CreateEditProfile/CreateEditProfile';

export default function Profile() {
  const { user } = useUser();
  const { profileObj } = useProfile();
  console.log(profileObj);
  const { bio, name, email, birthday } = profileObj;

  return (
    <div>
      {user.id}
      {user.email}
      {name ? (
        <div>
          <h3>{name}</h3>
          <div>{email}</div>
          <div>{birthday}</div>
          <div>{bio}</div>
        </div>
      ) : (
        <CreateEditProfile />
      )}
    </div>
  );
}
