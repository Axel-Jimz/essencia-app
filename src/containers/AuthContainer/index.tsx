import React from 'react';
import Container from '../../components/layout/Container';
import AuthNavbar from '../../components/layout/Navbar/variants/AuthNavbar';
import AuthMain from '../../components/layout/Main/variants/AuthMain';

import "./styles/index.css";

const AuthContainer: React.FC = () => {
  return (
    <Container id='auth'>
        <AuthNavbar />
        <AuthMain />
    </Container>
  );
};

export default AuthContainer;