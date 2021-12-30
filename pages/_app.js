import { useEffect } from "react";
import DefaultLayout from "../components/Layout/Default";
import "../styles/bootstrap.scss";
import "../styles/global.scss";
import "../styles/variable.module.scss";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default App;
