import React from 'react';
import Container from '../../components/layout/Container';
import LoadingIcon from '../../components/icons/LoadingIcon';

import "./styles/index.css";
import "./styles/theme.css";

const LoaderContainer: React.FC = () => {
  return (
    <Container id='loader'>
      <div>
        <LoadingIcon />
      </div>
      <span>Cargando...</span>
    </Container>
  );
};

export default LoaderContainer;