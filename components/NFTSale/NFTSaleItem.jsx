import React from "react";
import { Col, Image } from "react-bootstrap";
import NumberFormat from "../../shared/lib/NumberFormat";
import style from "./nftsale.module.scss";

const NFTSaleItem = (props) => {
  const rarity = props.rarity;
  const rarityStr = props.rarityStr;

  const rarityFormat = NumberFormat().rarity;

  return (
    <Col className={style.wrap} xs={6} md={4}>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Image
        src={props.imageUrl}
        alt={"NFT tres enanos de rareza " + rarity}
        fluid
      />
      <h3 className={style.rarityName}>{rarityStr}</h3>
      <p className={style.rarityValue}>&lt;{rarityFormat(rarity)}</p>
    </Col>
  );
};

export default NFTSaleItem;
