import React from "react";
import { Col, Image } from "react-bootstrap";
import NumberFormat from "../../shared/lib/NumberFormat";
import style from "./nftsale.module.scss";

const NFTSaleItem = (props) => {
  const imageUrl = props.imageUrl;
  const rarity = props.rarity;

  const rarityFormat = NumberFormat().rarity;

  return (
    <Col className={style.wrap} xs={6} md={4}>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Image src={imageUrl} alt={"NFT tres enanos de rareza " + rarity} fluid />
      <p className={style.rarity}>{rarityFormat(rarity)}</p>
    </Col>
  );
};

export default NFTSaleItem;
