import { Container } from "react-bootstrap";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";
import NFT from "../../content/NFT"

export default function NFTPage() {
  return (
    <Container>
      <Header />

      <NFT />

      <Footer />
    </Container>
  );
}
