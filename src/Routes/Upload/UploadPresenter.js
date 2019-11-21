import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import TextareaAutosize from "react-autosize-textarea";

import Loader from "../../Components/Loader";
import { AddPost } from "../../Components/Icons";
import Button from "../../Components/Button";

export default ({ loading, onKeyPress }) => {
  if (loading === true) {
    return (
      <LogoWrapper>
        <Loader />
      </LogoWrapper>
    );
  } else if (!loading) {
    return <Button onClick={onKeyPress} text="Click!!!" />;
  }
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
