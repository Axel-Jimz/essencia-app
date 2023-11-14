import React from 'react';
import { PostImageProps } from './props';
import CustomImage from '../..';

import "./styles/index.css";

const PostImage: React.FC<PostImageProps> = ({ src, alt }) => {
  return (
    <CustomImage src={src} alt={alt} id='post' />
  );
};

export default PostImage;