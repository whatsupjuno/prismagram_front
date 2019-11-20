import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Loader from "../../Components/Loader";
import Post from "../../Components/Post";

const FeedPresenter = ({ data, loading }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Hamgstagram</title>
      </Helmet>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map(post => (
          <Post
            key={post.id}
            id={post.id}
            location={post.location}
            caption={post.caption}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            comments={post.comments}
            createdAt={post.createdAt}
          />
        ))}
    </Wrapper>
  );
};

export default FeedPresenter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;
