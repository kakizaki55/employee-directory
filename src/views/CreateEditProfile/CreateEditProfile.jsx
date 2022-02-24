import React from 'react';
import CreateEditProfileForm from '../../components/CreateEditProfileForm/CreateEditProfileForm';
import { useProfile } from '../../context/ProfileContext';

export default function CreateEditProfile() {
  return (
    <div>
      <CreateEditProfileForm />
    </div>
  );
}
