import React from 'react';
import Navbar from '../..';

import "./styles/index.css";
import Logo from '../../../../brand/Logo';
import ButtonGroup from '../../../../groups/ButtonGroup';
import ToggleThemeButton from '../../../../buttons/RoundButton/variants/ToggleThemeButton';
import GoToNotificationsPageButton from '../../../../buttons/NavRoundButton/variants/GoToNotificationsPageButton';
import GoToNewsPageButton from '../../../../buttons/NavRoundButton/variants/GoToNewsPageButton';
import GoToConfigPageButton from '../../../../buttons/NavRoundButton/variants/GoToConfigPageButton';

const  HomeNavbar: React.FC = () => {
  return (
    <Navbar id='home'>
      <Logo  showText={false} />
      <ButtonGroup stack='horizontal'>
          <ToggleThemeButton />
          <GoToNotificationsPageButton />
          <GoToNewsPageButton />
          <GoToConfigPageButton />
      </ButtonGroup>
    </Navbar>
  );
};

export default  HomeNavbar;