import React from "react";
import Card from "../..";
import ProfilePicture from "../../../../avatars/ProfilePicture";
import Username from "../../../../typography/Heading/variants/Username";
import CreatedAt from "../../../../typography/Paragraph/variants/CreatedAt";
import OptionsPost from "../../../../groups/RoundExpandableButtonGroup/variants/OptionsPost";

import Content from "../../../../typography/Paragraph/variants/Content";
import PostImage from "../../../../images/CustomImage/variants/PostImage";
import TotalLikes from "../../../../typography/Paragraph/variants/TotalLikes";
import TotalComments from "../../../../typography/Paragraph/variants/TotalComments";
import TotalShares from "../../../../typography/Paragraph/variants/TotalShares";
import LikePostButton from "../../../../buttons/AsynchRectangleButton/variants/LikePostButton";
import CommentPostButton from "../../../../buttons/NavRectangleButton/variants/CommentPostButton";
import SharePostButton from "../../../../buttons/AsynchRectangleButton/variants/SharePostButton";

import "./styles/index.css";
import "./styles/theme.css";


const PostShareCard: React.FC = () => {
  return (
    <Card id="post-share">
      <div className="card-header">
        <div>
          <ProfilePicture src="" alt="" />
        </div>
        <div>
          <Username>Axel Jiménez</Username>
          <CreatedAt>11 de noviembre de 210</CreatedAt>
        </div>
        <div>
          <OptionsPost />
        </div>
      </div>

      <div className="card-main">

        <div>
          <div>
            <ProfilePicture src="" alt="" />
          </div>
          <div>
            <Username>Usuario original</Username>
            <CreatedAt>11 de noviembre de 210</CreatedAt>
          </div>
        </div>

        <div>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex
            atque minima at? Recusandae rerum consectetur aliquid, sunt debitis
            aperiam optio ullam excepturi suscipit ex iure veniam odit ad
            molestias.
          </Content>
        </div>

        <div>
          <PostImage
            src="https://www.elnuevoherald.com/ultimas-noticias/70talg/picture281778918/alternates/LANDSCAPE_768/USATSI_21886415.jpg"
            alt="example"
          />
        </div>

        <div>
          <TotalLikes value={0} />
          <div>
            <TotalComments value={0} />
            <TotalShares value={0} />
          </div>
        </div>
        
      </div>

      <div className="card-footer">
        <LikePostButton />
        <CommentPostButton />
        <SharePostButton />
      </div>
    </Card>
  );
};

export default PostShareCard;