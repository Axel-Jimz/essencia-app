export const sortNotificationsByTimestamp = (notifications: any) => {
  const groupedNotifications = notifications.reduce((acc: any, notification: any) => {
    const key = `${notification.postId}-${notification.type}`;
    if (!acc[key] || acc[key].timestamp < notification.timestamp) {
      acc[key] = notification;
    }
    return acc;
  }, {});

  const sortedNotifications = Object.values(groupedNotifications).sort((a: any, b: any) => b.timestamp - a.timestamp);
  return sortedNotifications;
};
