import React from 'react';
import Navbar from '../..';
import BackToHomePageButton from '../../../../buttons/NavRoundButton/variants/BackToHomePageButton';
import Callout from '../../../../typography/Heading/variants/Callout';

import "./styles/index.css";

const PostNavbar: React.FC = () => {
  return (
    <Navbar id='post'>
      <BackToHomePageButton />
      <Callout>Comentarios de la publicación</Callout>
      <div></div>
    </Navbar>
  );
};

export default PostNavbar;