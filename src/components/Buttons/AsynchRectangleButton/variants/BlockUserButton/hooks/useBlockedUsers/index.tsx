import {  useContext, useState, useEffect } from 'react';
import { UserModelContext } from '../../../../../../../state/contexts/UserModelContext';

const useBlockedUsers = (userId: string, userToBlockId: string) => {
  const [blockedUsersData, setBlockedUsersData] = useState<any[]>([]);

  const { watchBlockedUsers } = useContext(UserModelContext);

  useEffect(() => {
    const updateBlockedUsersData = (newBlockedUsersData: any[]) => {
      setBlockedUsersData(newBlockedUsersData); 
    };

    const unsubscribe = watchBlockedUsers(userId, updateBlockedUsersData);

    return () => unsubscribe();
  }, [userId]); 

  const blockedUsersIds = blockedUsersData.map(blockedUser => blockedUser.blocked);
  const isBlockedUser = blockedUsersIds.includes(userToBlockId);

  return { blockedUsersData, isBlockedUser };
};

export default useBlockedUsers;
