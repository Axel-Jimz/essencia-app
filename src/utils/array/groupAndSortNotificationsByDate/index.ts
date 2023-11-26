export const sortNotificationsByTimestamp = (notifications) => {
  const groupedNotifications = notifications.reduce((acc, notification) => {
    const key = `${notification.postId}-${notification.type}`;
    if (!acc[key] || acc[key].timestamp < notification.timestamp) {
      acc[key] = notification;
    }
    return acc;
  }, {});

  const sortedNotifications = Object.values(groupedNotifications).sort((a, b) => b.timestamp - a.timestamp);
  return sortedNotifications;
};
