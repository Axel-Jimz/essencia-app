import React, { useContext, useEffect } from "react";
import { UserModelContext } from "../../state/contexts/UserModelContext";
import { firebaseMarkNotificationsAsUnviewed } from "../../services/firebase/functions/data/uptate/firebaseMarkNotificationsAsUnviewed";
import { useQuery } from "react-query";
import { firebaseGetPersonalNotifications } from "../../services/firebase/functions/data/read/firebaseGetPersonalNotifications";
import { sortNotificationsByTimestamp } from "../../utils/array/groupAndSortNotificationsByDate";
import Container from "../../components/layout/Container";
import NotificationsNavbar from "../../components/layout/Navbar/variants/NotificationsNavbar";
import NotificationsMain from "../../components/layout/Main/variants/NotificationsMain";
import CardGroup from "../../components/groups/CardGroup";
import NotificationCard from "../../components/layout/Card/variants/NotificationCard";

import "./styles/index.css";
import NotificationsNotice from "../../components/utils/Notice/variants/NotificationsNotice";

const NotificationsContainer: React.FC = () => {
  const { userId } = useContext(UserModelContext);

  useEffect(() => {
    firebaseMarkNotificationsAsUnviewed(userId);
  }, [userId]);

  const data = useQuery(["notifications"], async () => {
    const data = firebaseGetPersonalNotifications(userId);
    return data;
  });

  const sortedNotifications = data.data
    ? sortNotificationsByTimestamp(data.data)
    : [];

  return (
    <Container id="notifications">
      <NotificationsNavbar />
      <NotificationsMain>
      <CardGroup stack="vertical">
        {data.isLoading === true ? (
          <h1>Cargando...</h1>
        ) : sortedNotifications.length === 0 ? (
          <NotificationsNotice />
        ) : (
          sortedNotifications.map((notification) => (
            <div key={notification.notificationId}>
              <NotificationCard
                notificationId={notification.notificationId}
                postId={notification.postId}
                postImage={notification.postData.postImage}
                createdAt={notification.createdAt}
                typeNotification={notification.type}
              />
            </div>
          ))
        )}
      </CardGroup>
      </NotificationsMain>
    </Container>
  );
};

export default NotificationsContainer;
