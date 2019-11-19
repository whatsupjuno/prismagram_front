import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers
  },
  // request: async authorization => {
  //   const token = await localStorage.getItem("token");
  //   authorization.setContext({
  //     headers: {
  //       Authorization: token ? `Bearer ${token}` : ""
  //     }
  //   });
  // }
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
