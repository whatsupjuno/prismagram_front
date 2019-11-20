import React from "react";
import { useQuery } from "react-apollo-hooks";

import FeedPresenter from "./FeedPresenter";
import { FEED_QUERY } from "./FeedQueries";

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);

  return <FeedPresenter data={data} loading={loading} />;
};
