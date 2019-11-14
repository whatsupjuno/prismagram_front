import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

const QUERY = gql`
  {
    isLoggedIn @client //@clinet의 뜻은 Query를 client에서 한다는 의미, 없을 경우 API로 보냄
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
};
