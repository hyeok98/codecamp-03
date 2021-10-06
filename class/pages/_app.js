// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import { useState, createContext, useEffect } from "react";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCFgLc9rvbwQytyfBu7R8p4-BXLeyKlcvY",
  authDomain: "exmple-e0595.firebaseapp.com",
  projectId: "exmple-e0595",
  storageBucket: "exmple-e0595.appspot.com",
  messagingSenderId: "85785696966",
  appId: "1:85785696966:web:6c81f0007dad6b499c95c7",
  measurementId: "G-EBN3H56TPF",
});

export const GlobalContext = createContext(null); //10.05

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState(""); //10.05
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  }; //10.05

  useEffect(() => {
    // localStorage.clear();
    const accessToken = localStorage.getItem("accessToken") || "";
    setAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` }, //10.05
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
