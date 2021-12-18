import { Container } from "react-bootstrap";
import NFTSale from "../../components/NFTSale";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";

export default function NFT() {
  return (
    <Container>
      <Header />

      <NFTSale />

      <Footer />
    </Container>
  );
}
