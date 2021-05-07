import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "../createStore";
import GlobalStyles from "../styles/global-styles";
import { ThemeProvider } from "../styles/themed-components";
import theme from "../styles/themes";
import { AppProps } from "next/app";
import configureStore from "../createStore";

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default withRedux(createStore)(withReduxSaga(MyApp));
