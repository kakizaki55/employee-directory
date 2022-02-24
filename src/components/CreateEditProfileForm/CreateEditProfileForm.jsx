import React from 'react';
import { useProfile } from '../../context/ProfileContext';

export default function CreateEditProfileForm() {
  const { profileObj, setProfileObj } = useProfile();
  console.log(profileObj);
  return <div>CreateEditProfileForm</div>;
}
