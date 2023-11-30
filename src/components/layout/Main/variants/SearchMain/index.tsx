import React from 'react';
import { SearchMainProps } from './props';
import Main from '../..';

import "./styles/index.css";

const SearchMain: React.FC<SearchMainProps> = ({ children }) => {
  return (
    <Main id='search'>
        {children}
    </Main>
  );
};

export default SearchMain;