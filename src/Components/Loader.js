import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";

const Animation = keyframes`
    /* 0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    } */
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
`;

export default () => (
  <Loader>
    <Logo size={100} />
  </Loader>
);
