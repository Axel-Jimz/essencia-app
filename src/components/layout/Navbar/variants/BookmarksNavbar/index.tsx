import React from 'react';
import Navbar from '../..';
import BackToHomePageButton from '../../../../buttons/NavRoundButton/variants/BackToHomePageButton';
import Callout from '../../../../typography/Heading/variants/Callout';
import NotificationsOptions from '../../../../groups/RoundExpandableButtonGroup/variants/NotificationsOptions';

import "./styles/index.css";

const BookmarksNavbar: React.FC = () => {
  return (
    <Navbar id='bookmarks'>
      <BackToHomePageButton />
      <Callout>Guardados</Callout>
      <NotificationsOptions />
    </Navbar>
  );
};

export default BookmarksNavbar;