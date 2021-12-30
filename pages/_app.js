import { useEffect } from "react";
import DefaultLayout from "../components/Layout/Default";
import { WalletContextProvider } from "../providers/WalletProvider";
import "../styles/bootstrap.scss";
import "../styles/global.scss";
import "../styles/variable.module.scss";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <WalletContextProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </WalletContextProvider>
  );
};

export default App;
