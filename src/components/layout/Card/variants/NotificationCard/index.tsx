import React from "react";
import Card from "../..";
import { NotificationCardProps } from "./props";
import PostImage from "../../../../images/CustomImage/variants/PostImage";
import HeartIcon from "../../../../icons/HeartIcon";
import CommentIcon from "../../../../icons/CommentIcon";
import ShareIcon from "../../../../icons/ShareIcon";
import NotificationOptions from "../../../../groups/RoundExpandableButtonGroup/variants/NotificationOptions";
import Callout from "../../../../typography/Heading/variants/Callout";
import CreatedAt from "../../../../typography/Paragraph/variants/CreatedAt";
import TotalLikes from "../../../../typography/Paragraph/variants/TotalLikes";
import TotalComments from "../../../../typography/Paragraph/variants/TotalComments";
import TotalShares from "../../../../typography/Paragraph/variants/TotalShares";

import "./styles/index.css";
import "./styles/theme.css";

const NotificationCard: React.FC<NotificationCardProps> = ({ notificationId, postId, postImage, createdAt, typeNotification }) => {
  return (
    <Card id="notification">

      {/* Parte 1 */}
      <div>
        <div>
          <PostImage
            src={postImage}
            alt={notificationId}
          />
          <div className="icon">
            {typeNotification === 'like' && <HeartIcon active={true} />}
            {typeNotification === 'comment' && <CommentIcon/>}
            {typeNotification === 'share' && <ShareIcon active={true} />}
          </div>
        </div>
      </div>

      {/* Parte 2 */}
      <div>
        <div>
          {typeNotification === 'like' && <Callout>Han dado me gusta a tu publicación</Callout>}
          {typeNotification === 'comment' && <Callout>Han comentado tu publicación</Callout>}
          {typeNotification === 'share' && <Callout>Has compartido tu publicación</Callout>}     

          <CreatedAt>{createdAt}</CreatedAt>

          {typeNotification === 'like' && <TotalLikes postId={postId} />}
          {typeNotification === 'comment' && <TotalComments postId={postId} />}
          {typeNotification === 'share' && <TotalShares postId={postId} />}          
        </div>
      </div>

      {/* Parte 3 */}

      <div>
        <NotificationOptions notificationId={notificationId} />
      </div>
    </Card>
  );
};

export default NotificationCard;
