import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresnter";

const PostContainer = ({
  id, //POST id
  user,
  files,
  likeCount,
  isLiked, //From Database
  comments,
  createdAt,
  caption,
  location
}) => {
  const [isLikedState, setIsLiked] = useState(isLiked); //From Local State
  const [likeCountState, setLikeCount] = useState(likeCount); //From Local State
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState([]);

  const comment = useInput("");

  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });

  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value }
  });

  const rightSlide = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setCurrentItem(totalFiles - 1);
    } else {
      setCurrentItem(currentItem + 1);
    }
  };

  const leftSlide = () => {
    if (currentItem === 0) {
      setCurrentItem(0);
    } else {
      setCurrentItem(currentItem - 1);
    }
  };

  // ****Auto moving
  //   const slide = () => {
  //     const totalFiles = files.length;
  //     if (currentItem === totalFiles - 1) {
  //       setTimeout(() => setCurrentItem(0), 2000);
  //     } else {
  //       setTimeout(() => setCurrentItem(currentItem + 1), 2000);
  //     }
  //     // console.log(currentItem);
  //   };

  //   useEffect(() => {
  //     slide();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [currentItem]);

  const toggleLike = () => {
    toggleLikeMutation();
    if (isLikedState === true) {
      setIsLiked(false);
      setLikeCount(likeCountState - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountState + 1);
    }
  };

  const onKeyPress = async event => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        const {
          data: { addComment }
        } = await addCommentMutation();
        setSelfComments([...selfComments, addComment]);
        comment.setValue("");
      } catch {
        toast.error("Cant send comment");
      }
    }
  };

  return (
    <PostPresenter
      user={user}
      files={files}
      likeCount={likeCountState}
      location={location}
      caption={caption}
      isLiked={isLikedState}
      comments={comments}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      selfComments={selfComments}
      rightSlide={rightSlide}
      leftSlide={leftSlide}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string,
  createdAt: PropTypes.string.isRequired
};

export default PostContainer;
