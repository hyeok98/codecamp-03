import "antd/dist/antd.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { createUploadLink } from "apollo-upload-client";
import Layout from "../src/components/commons/layout";
import LandingPage from ".";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";
import { useEffect, useState, createContext } from "react";

export const GlobalContext = createContext(null);

const HIDDEN_MAIN = ["/"];
const HIDDEN_LOGIN = ["/auth/login"];
const HIDDEN_SIGNUP = ["/auth/signup"];

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    // localStorage.clear();
    const accessToken = localStorage.getItem("accessToken") || "";
    setAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  const router = useRouter();

  const isHiddenMain = HIDDEN_MAIN.includes(router.pathname);
  const isHiddenLogin = HIDDEN_LOGIN.includes(router.pathname);
  const isHiddenSignup = HIDDEN_SIGNUP.includes(router.pathname);

  return (
    <GlobalContext.Provider value={value}>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        {isHiddenMain && <LandingPage />}

        {!isHiddenMain && !isHiddenSignup && !isHiddenLogin && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
        {isHiddenSignup && <SignupPage />}
        {isHiddenLogin && <LoginPage />}
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
