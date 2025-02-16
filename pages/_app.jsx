import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider
import "../styles/globals.css";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
