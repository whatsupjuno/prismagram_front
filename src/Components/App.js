import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import Footer from "./Footer";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

const QUERY = gql`
  {
    isLoggedIn @client
    # @clinet의 뜻은 Query를 client에서 한다는 의미, 없을 경우 API로 보냄
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};
