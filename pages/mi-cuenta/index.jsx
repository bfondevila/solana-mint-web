import { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import NFTSaleItem from "../../components/NFTSale/NFTSaleItem";
import OpenseaButton from "../../components/OpenseaButton";
import Web3Connection from "../../components/Web3Connection";
import { WalletContext } from "../../providers/WalletProvider";
import { getNFTsFromAddress } from "../../shared/lib/Crypto";
import style from "./micuenta.module.scss";

export default function MyAccount() {
  const { userWallet } = useContext(WalletContext);
  const [NFTsInWallet, setNFTsInWallet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const myNFTs = (await getNFTsFromAddress(userWallet)).filter(
        (nft) => !nft.pendingReveal,
      );
      myNFTs.sort((a, b) => a.rarity - b.rarity);
      setNFTsInWallet(myNFTs);
    };
    fetchData();
  }, [userWallet]);

  return (
    <>
      <section className={style.section}>
        <div className={"text-center" + " " + style.paddings}>
          <h1>Tu cuenta</h1>
          <h4>
            {userWallet
              ? "Accede a tu colección en OpenSea: "
              : "Por favor, conecta tu monedero primero."}
          </h4>
          <div className={"btn " + style.social} hidden={userWallet !== ""}>
            <Web3Connection />
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
            <h3>Actualmente tienes {NFTsInWallet.length} NFT en tu monedero</h3>
            <hr className={style.sep_line}></hr>
            <div className={style.grid_container}>
              <Row>
                {NFTsInWallet.map((nft, index) => {
                  return (
                    <NFTSaleItem
                      imageUrl={nft.image}
                      useWebp={false}
                      rarity={nft.rarity ? nft.rarity / 1000 : null}
                      rarityStr={nft.rarityStr}
                      key={index}
                      cleanDesign={false}
                    ></NFTSaleItem>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
