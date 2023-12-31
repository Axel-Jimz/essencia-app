import React from 'react';
import Navbar from '../..';
import BackToHomePageButton from '../../../../buttons/NavRoundButton/variants/BackToHomePageButton';
import Callout from '../../../../typography/Heading/variants/Callout';
import BookmarksOptions from '../../../../groups/RoundExpandableButtonGroup/variants/BookmarksOptions';

import "./styles/index.css";

const BookmarksNavbar: React.FC = () => {
  return (
    <Navbar id='bookmarks'>
      <BackToHomePageButton />
      <Callout>Guardados</Callout>
      <BookmarksOptions />
    </Navbar>
  );
};

export default BookmarksNavbar;