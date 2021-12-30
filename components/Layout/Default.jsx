import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
