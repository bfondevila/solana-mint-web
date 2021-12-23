import React from "react";
import { Col, Image } from "react-bootstrap";
import NumberFormat from "../../shared/lib/NumberFormat";
import style from "./nftsale.module.scss";

const NFTSaleItem = (props) => {
  const imageUrl = props.imageUrl;
  const rarity = props.rarity;
  const index = props.index;

  const rarityFormat = NumberFormat().rarity;

  const rarityIndexToName = (rarity) => {
    if (rarity == 0) {
      return "Coleccionista";
    } else if (rarity <= 0.01) {
      return "Legendario";
    } else if (rarity <= 0.1) {
      return "Epico";
    } else if (rarity < 0.2) {
      return "Raro";
    } else {
      return "Comun";
    }
  };

  return (
    <Col className={style.wrap} xs={6} md={4}>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Image src={imageUrl} alt={"NFT tres enanos de rareza " + rarity} fluid />
      <h3 className={style.rarityName}>
        #{index}. {rarityIndexToName(rarity)}
      </h3>
      <p className={style.rarityValue}>{rarityFormat(rarity)}</p>
    </Col>
  );
};

export default NFTSaleItem;
