import React from "react";
import ReactDOM from "react-dom";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
