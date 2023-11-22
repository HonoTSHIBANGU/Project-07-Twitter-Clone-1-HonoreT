import React from 'react';
import photo from '/images/profilePhoto.png';

const ProfilePhoto = () => {
  return (
    <div className='avatar'>
      <img src={photo} alt="Profil" />
    </div>
  );
};
export default ProfilePhoto;