import React, { useContext } from "react";
import { UserModelContext } from "../../state/contexts/UserModelContext";
import Container from "../../components/layout/Container";
import { useQuery } from "react-query";
import { firebaseGetPersonalUserSavedPosts } from "../../services/firebase/functions/data/read/firebaseGetPersonalUserSavedPosts";
import { sortNotificationsByTimestamp } from "../../utils/array/groupAndSortNotificationsByDate";
import LoadingIcon from "../../components/icons/LoadingIcon";
import BookmarksNavbar from "../../components/layout/Navbar/variants/BookmarksNavbar";
import BookmarksMain from "../../components/layout/Main/variants/BookmarksMain";
import CardGroup from "../../components/groups/CardGroup";
import BookmarkNotice from "../../components/utils/Notice/variants/BookmarkNotice";
import BookmarkCard from "../../components/layout/Card/variants/BookmarkCard";

import "./styles/index.css";

const BookmarksContainer: React.FC = () => {
  const { userId } = useContext(UserModelContext);

  const bookmarksData = useQuery(["bookmarks"], async () => {
    const data = await firebaseGetPersonalUserSavedPosts(userId);
    return data;
  });

  const sortedBookmarks = bookmarksData.data
    ? sortNotificationsByTimestamp(bookmarksData.data)
    : [];

  return (
    <Container id="bookmarks">
        {bookmarksData.isLoading ? (
          <div className="loading">
            <LoadingIcon />
          </div>
        ) : (
          <>
            <BookmarksNavbar />
            <BookmarksMain>
              <CardGroup stack="vertical">
                {sortedBookmarks.length <= 0 ? (
                  <BookmarkNotice />
                ) : (
                  sortedBookmarks.map((bookmark: any) => (
                    <div key={bookmark.postId}>
                      <BookmarkCard
                        postId={bookmark.postId}
                        authorId={bookmark.authorId}
                        profilePictureURL={bookmark.authorData.profilePictureURL}
                        username={bookmark.authorData.username}
                        createdAt={bookmark.createdAt}
                        postContent={bookmark.postContent}
                        postImage={bookmark.postImage}
                      />
                    </div>
                  ))
                )}
              </CardGroup>
            </BookmarksMain>
          </>
        )}
    </Container>
  );
};

export default BookmarksContainer;
