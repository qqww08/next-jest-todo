import "dayjs/locale/ko";

import { AppProps } from "next/app";
import Head from "next/head";
import { SWRConfig } from "swr";
import { NextPageContext } from "next";
import { ThemeProvider } from "styled-components";
import { WithSagaTaskStore } from "~/interfaces";
import axios from "~/utils/axios";
import wrppaer from "../createStore";
import themes from "~/styles/themes";

interface MyAppProps extends AppProps {
  store: WithSagaTaskStore;
  ctx: NextPageContext;
  fallback: any;
}
function MyApp({ Component, pageProps }: MyAppProps) {
  const option = {
    // onError: (error) => {},
    fetcher: (url) => axios.get(url).then((res) => res.data.data),
  };

  return (
    <>
      <Head>
        <title>코인고스트</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=no" />
      </Head>

      <ThemeProvider theme={themes}>
        <SWRConfig value={option}>
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default wrppaer.withRedux(MyApp);
