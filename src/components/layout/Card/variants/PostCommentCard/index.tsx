import React from "react";
import Card from "../..";
import ProfilePicture from "../../../../avatars/ProfilePicture";
import Content from "../../../../typography/Paragraph/variants/Content";
import OptionsComment from "../../../../groups/RoundExpandableButtonGroup/variants/OptionsComment";
import Username from "../../../../typography/Heading/variants/Username";
import CreatedAt from "../../../../typography/Paragraph/variants/CreatedAt";

import "./styles/index.css";
import "./styles/theme.css";


const PostCommentCard: React.FC = () => {
  return (
    <Card id="post-comment">
      <div>
        <ProfilePicture src="" alt="" />
      </div>
      <div>
        <div>
          <Username>Axel Jiménez</Username>
          <CreatedAt>11 de noviembre de 210</CreatedAt>
        </div>

        <Content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde vel
          fugit ipsum aspernatur voluptate expedita cupiditate, ratione sequi
          qui reprehenderit? Dolorum aspernatur consequatur tempore, est
          voluptas harum eligendi aut sed.
        </Content>
      </div>
      <div>
        <OptionsComment />
      </div>
    </Card>
  );
};

export default PostCommentCard;
