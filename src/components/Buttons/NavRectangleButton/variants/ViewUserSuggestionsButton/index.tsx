import React from 'react';
import NavRectangleButton from '../..';

const ViewUserSuggestionsButton: React.FC = () => {
  return (
    <NavRectangleButton navigateTo='/' unstyled={true} bg='blue' bgOpacity='40'>
      Ver todos
    </NavRectangleButton>
  );
};

export default ViewUserSuggestionsButton;