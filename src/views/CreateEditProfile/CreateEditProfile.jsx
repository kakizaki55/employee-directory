import React from 'react';
import CreateEditProfileForm from '../../components/CreateEditProfileForm/CreateEditProfileForm';

export default function CreateEditProfile({ isEditing }) {
  return (
    <div>
      <CreateEditProfileForm isEditing={isEditing} />
    </div>
  );
}
