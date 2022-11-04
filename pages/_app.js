import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/Layout";
import { ListProvider } from "../context/listContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ListProvider>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ListProvider>
    </>
  );
}

export default MyApp;
