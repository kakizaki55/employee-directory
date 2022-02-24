import React from 'react';
import CreateEditProfileForm from '../../components/CreateEditProfileForm/CreateEditProfileForm';
import { useProfile } from '../../context/ProfileContext';

export default function CreateEditProfile({ isEditing }) {
  return (
    <div>
      <CreateEditProfileForm isEditing={isEditing} />
    </div>
  );
}
