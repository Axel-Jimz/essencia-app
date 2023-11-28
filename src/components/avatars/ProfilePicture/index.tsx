import React from 'react';
import { ProfilePictureProps } from './props';
import { Link } from 'react-router-dom';
import CustomImage from '../../images/CustomImage';

import "./styles/index.css";

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, alt, navigateTo, onlineStatus }) => {
  const classes = ['status'];

  onlineStatus ? classes.push('online') : classes.push('offline');

  return (
    <Link to={`/profile/${navigateTo}`}>
        <CustomImage src={src} alt={alt} id='profile-picture' />
        {onlineStatus !== undefined && <div className={classes.join(' ')}></div>}
    </Link>
  );
};

export default ProfilePicture;