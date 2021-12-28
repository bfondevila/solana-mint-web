import { useState } from "react";
import { Row } from "react-bootstrap";
import MetamaskConnection from "../../components/MetamaskConnection";
import NFTSaleItem from "../../components/NFTSale/NFTSaleItem";
import OpenseaButton from "../../components/OpenseaButton";
import { getNFTsFromAddress } from "../../shared/lib/Crypto";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";
import style from "./micuenta.module.scss";

export default function MyAccount() {
  const [userWallet, setUserWallet] = useState("");
  const [NFTsInWallet, setNFTsInWallet] = useState([]);

  const handleAccountsChanged = async (accounts) => {
    const userWallet = accounts.length > 0 ? accounts[0] : "";
    setUserWallet(userWallet);

    setNFTsInWallet(await getNFTsFromAddress(userWallet));
  };

  return (
    <main>
      <Header />
      <section className={style.section}>
        <div className={"text-center" + " " + style.paddings}>
          <h1>Tu cuenta</h1>
          <h4>
            {userWallet
              ? "Accede a tu colección en Opensea: "
              : "Por favor, conecta tu monedero primero."}
          </h4>
          <div className={"btn " + style.social} hidden={userWallet !== ""}>
            <MetamaskConnection onAccountsChanged={handleAccountsChanged} />
            {/* <Container>Iconos Sociales</Container> */}
          </div>
          <div hidden={userWallet === ""}>
            <OpenseaButton wallet={userWallet}></OpenseaButton>
          </div>
        </div>
      </section>
      <section
        className={style.section + " white_background"}
        hidden={userWallet === ""}
      >
        <div className={"text-center"}>
          <div className={"text-center" + " " + style.paddings}>
            <h2>Actualmente tienes {NFTsInWallet.length} NFT en tu monedero</h2>
            <hr className={style.sep_line}></hr>
            <div className={style.grid_container}>
              <Row>
                {NFTsInWallet.map((nft, index) => {
                  return (
                    <NFTSaleItem
                      imageUrl={nft.image}
                      rarity={nft.rarity / 10000}
                      rarityStr={nft.rarityStr}
                      key={index}
                    ></NFTSaleItem>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
