import React from 'react';
import Navbar from '../..';
import BackToHomePageButton from '../../../../buttons/NavRoundButton/variants/BackToHomePageButton';
import Callout from '../../../../typography/Heading/variants/Callout';
import NotificationsOptions from '../../../../groups/RoundExpandableButtonGroup/variants/NotificationsOptions';

import "./styles/index.css";

const NotificationsNavbar: React.FC = () => {
  return (
    <Navbar id='notifications'>
      <BackToHomePageButton />
      <Callout>Notificaciones</Callout>
      <NotificationsOptions />
    </Navbar>
  );
};

export default NotificationsNavbar;