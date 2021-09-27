import "antd/dist/antd.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import LandingPage from ".";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  const HIDDEN_MAIN = ["/"];
  const HIDDEN_LAYOUT = [
    "/boards",
    "/boards/new",
    "/boards/new2",
    "/boards/list",
    "/boards/new2/[number]",
    "/boards/new2/[number]/edit",
  ];

  const router = useRouter();

  const isHiddenMain = HIDDEN_MAIN.includes(router.pathname);
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.pathname);

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        {!isHiddenLayout && <LandingPage></LandingPage>}

        {!isHiddenMain && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ApolloProvider>
    </>
  );
}

export default MyApp;
