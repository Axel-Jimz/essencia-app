import React from 'react';
import Navbar from '../..';

import Logo from '../../../../brand/Logo';

import ButtonGroup from '../../../../groups/ButtonGroup';
import GoToExplorePageButton from '../../../../buttons/NavRoundButton/variants/GoToExplorePageButton';
import GoToNotificationsPageButton from '../../../../buttons/NavRoundButton/variants/GoToNotificationsPageButton';
import ToggleNavbarMobile from '../../../../buttons/RoundButton/variants/ToggleNavbarMobile';

import "./styles/index.css";
import ProfilePicture from '../../../../avatars/ProfilePicture';


const  HomeNavbar: React.FC = () => {
  return (
    <Navbar id='home'>
      
      <Logo showText={false} />

      <ButtonGroup stack='horizontal'>
          <GoToExplorePageButton />
          <GoToNotificationsPageButton />
          <ToggleNavbarMobile />
          <ProfilePicture src='' alt='' />
      </ButtonGroup>

    </Navbar>
  );
};

export default  HomeNavbar;