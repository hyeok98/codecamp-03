// import "../styles/globals.css";
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCFgLc9rvbwQytyfBu7R8p4-BXLeyKlcvY",
  authDomain: "exmple-e0595.firebaseapp.com",
  projectId: "exmple-e0595",
  storageBucket: "exmple-e0595.appspot.com",
  messagingSenderId: "85785696966",
  appId: "1:85785696966:web:6c81f0007dad6b499c95c7",
  measurementId: "G-EBN3H56TPF",
});

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
