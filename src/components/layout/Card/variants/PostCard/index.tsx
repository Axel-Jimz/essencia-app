import React from 'react';
import Card from '../..';
import ProfilePicture from '../../../../avatars/ProfilePicture';
import Username from '../../../../typography/Heading/variants/Username';
import CreatedAt from '../../../../typography/Paragraph/variants/CreatedAt';

export interface PostCardProps {

}

const PostCard: React.FC<PostCardProps> = () => {
  return (
    <Card id='post'>
        <div className='header'>
            <div>
                <ProfilePicture src='' alt=''/>
            </div>
            <div>
                <Username>Axel Jiménez</Username>
                <CreatedAt>11 de noviembre de 210</CreatedAt>
            </div>
            <div>
                3
            </div>
        </div>
        <div className='main'>
            Main
        </div>
        <div className='footer'>
            Footer
        </div>
    </Card>
  );
};

export default PostCard;