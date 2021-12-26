import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import OpenseaButton from "../../components/OpenseaButton";
import NFTSaleItem from "../../components/NFTSale/NFTSaleItem";
import {
  getNFTsFromAddress,
} from "../../shared/lib/Crypto";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";
import style from "./micuenta.module.scss";

export default function MyAccount() {
  const [userWallet, setUserWallet] = useState("");
  const [NFTsInWallet, setNFTsInWallet] = useState([]);

  const isConnected = () => {
    return userWallet !== "";
  };

  const handleAccountsChanged = async (account) => {
    setUserWallet(account);
    setNFTsInWallet(await Promise.all(await getNFTsFromAddress(account)));
  };

  return (
    <main>
      <Header onAccountsChanged={handleAccountsChanged} />
      <section className={style.section}>
        <div className={"text-center" + " " + style.paddings}>
        <h1>Tu cuenta</h1>
        <p>{userWallet ? "Accede a tu colección en Opensea: " : "Por favor, conecta tu monedero primero."}</p>
        {isConnected() && (
          <div>
            {
            <OpenseaButton wallet={userWallet}></OpenseaButton>
            }
          </div>
        )}
        </div>
        </section>
        <div className={"text-center white_background"}>
        {isConnected() && (
          <div className={"text-center" + " " + style.paddings}>
            <h2>Actualmente tienes {NFTsInWallet.length} NFTs en tu monedero</h2>
            <p></p>
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
        )}
        </div> 
      
      <Footer />
    </main>
  );
}
