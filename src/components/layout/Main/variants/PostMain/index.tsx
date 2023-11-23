import React from 'react';
import { PostMainProps } from './props';
import Main from '../..';

import "./styles/index.css";

const PostMain: React.FC<PostMainProps> = ({ children }) => {
  return (
    <Main id='post'>
        {children}
    </Main>
  );
};

export default PostMain;