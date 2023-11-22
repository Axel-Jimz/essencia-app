import React from 'react';
import Container from '../../components/layout/Container';

import "./styles/index.css";
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { firebaseGetUserSpecificPost } from '../../services/firebase/functions/data/read/firebaseGetUserSpecificPost';

const PostContainer: React.FC = () => {
  const { postId } = useParams();

  console.log(postId, ' container')

  const data = useQuery(['post'], async () => {
    const result = await firebaseGetUserSpecificPost(postId);
    return result;
  })

  return (
    <Container id='post'>
        {data.status === 'success' && <h1> {data.data.postId} </h1>}
    </Container>
  );
};

export default PostContainer;