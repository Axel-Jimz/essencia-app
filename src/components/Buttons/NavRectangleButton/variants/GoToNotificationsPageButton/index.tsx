import React from 'react';
import NotificationIcon from '../../../../icons/NotificationIcon';
import NavRectangleButton from '../..';

const GoToNotificationsPageButton: React.FC = () => {
  return (
    <NavRectangleButton icon={<NotificationIcon />} navigateTo='/notifications' bg='gray' bgOpacity='40'>
        Notificaciones
    </NavRectangleButton>
  );
};

export default GoToNotificationsPageButton;