import type { AppProps } from "next/app";
import type { NextPageContext } from "next";
import { ThemeProvider } from "styled-components";

import themes from "~/styles/themes";
import { RecoilRoot } from "recoil";

interface MyAppProps extends AppProps {
  ctx: NextPageContext;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={themes}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default MyApp;
