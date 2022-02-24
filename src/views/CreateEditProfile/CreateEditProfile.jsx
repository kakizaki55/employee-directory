import React from 'react';
import CreateEditProfileForm from '../../components/CreateEditProfileForm/CreateEditProfileForm';
import { useProfile } from '../../context/ProfileContext';

export default function CreateEditProfile() {
  const { profileObj, setProfileObj } = useProfile();

  console.log('ProfileObj', profileObj);

  return (
    <div>
      <CreateEditProfileForm />
    </div>
  );
}
