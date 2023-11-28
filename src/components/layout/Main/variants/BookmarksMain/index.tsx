import React from 'react';
import { BookmarksMainProps } from './props';
import Main from '../..';

import "./styles/index.css";

const BookmarksMain: React.FC<BookmarksMainProps> = ({ children }) => {
  return (
    <Main id='bookmarks'>
      {children}
    </Main>
  );
};

export default BookmarksMain;