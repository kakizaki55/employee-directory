import React from 'react';
import { useProfile } from '../../context/ProfileContext';
import { useUser } from '../../context/UserContext';
import CreateEditProfile from '../CreateEditProfile/CreateEditProfile';
import style from './Profile.css';

export default function Profile() {
  const { user } = useUser();
  const { profileObj } = useProfile();
  const { bio, name, email, birthday } = profileObj;

  return (
    <div>
      {name ? (
        <div className={style.profileCard}>
          <h3>{name}</h3>
          <div>{email}</div>
          <div>{birthday}</div>
          <div>{bio}</div>
          <button>edit</button>
        </div>
      ) : (
        <CreateEditProfile />
      )}
    </div>
  );
}
