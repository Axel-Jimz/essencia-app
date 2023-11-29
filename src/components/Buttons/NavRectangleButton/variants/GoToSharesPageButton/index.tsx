import React from 'react';
import NavRectangleButton from '../..';
import ShareIcon from '../../../../icons/ShareIcon';

const GoToSharesPageButton: React.FC = () => {
  return (
    <NavRectangleButton icon={<ShareIcon active={false} />} navigateTo='/shares' bg='gray' bgOpacity='40'>
        Compartidos
    </NavRectangleButton>
  );
};

export default GoToSharesPageButton;