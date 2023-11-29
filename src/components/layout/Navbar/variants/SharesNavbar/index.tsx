import React from 'react';
import Navbar from '../..';
import BackToHomePageButton from '../../../../buttons/NavRoundButton/variants/BackToHomePageButton';
import Callout from '../../../../typography/Heading/variants/Callout';
import SharedPostsOptions from '../../../../groups/RoundExpandableButtonGroup/variants/SharedPostsOptions';

import "./styles/index.css";

const SharesNavbar: React.FC = () => {
  return (
    <Navbar id='shares'>
      <BackToHomePageButton />
      <Callout>Compartidos</Callout>
      <SharedPostsOptions />
    </Navbar>
  );
};

export default SharesNavbar;