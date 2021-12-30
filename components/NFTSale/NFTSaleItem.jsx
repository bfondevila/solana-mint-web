import React from "react";
import { Col, Card } from "react-bootstrap";
import NumberFormat from "../../shared/lib/NumberFormat";
import style from "./nftsale.module.scss";

const NFTSaleItem = (props) => {
  const rarity = props.rarity;
  const imageUrl = props.imageUrl;

  const rarityFormat = NumberFormat().rarity;

  const getRarityStr = (rarity) => {
    if (rarity >= 0.1) {
      return "COMÚN";
    } else if (0.04 <= rarity && rarity <= 0.05) {
      return "RARO";
    } else if (0.01 <= rarity && rarity <= 0.02) {
      return "ÉPICO";
    } else if (0.001 <= rarity && rarity <= 0.005) {
      return "LEGENDARIO";
    } else if (rarity < 0.001) {
      return "COLECCIONISTA";
    }
  };

  const getRarityStyle = (rarity) => {
    if (rarity >= 0.1) {
      return style.common_card;
    } else if (0.04 <= rarity && rarity <= 0.05) {
      return style.bronze_card;
    } else if (0.01 <= rarity && rarity <= 0.02) {
      return style.metal_card;
    } else if (0.001 <= rarity && rarity <= 0.005) {
      return style.gold_card;
    } else if (rarity < 0.001) {
      return style.collector_card;
    }
  };

  return (
    <Col className={style.wrap} xs={12} md={4}>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <div className={style.card_container}>
        <Card className={style.card + " " + getRarityStyle(rarity)}>
          <Card.Img
            variant="top"
            src={imageUrl}
            alt={"NFT tres enanos de rareza " + rarity}
            fluid={true}
          />
          {props.cleanDesign ? (
            <Card.Body></Card.Body>
          ) : (
            <Card.Body className={style.card_body}>
              <Card.Title className={style.card_text}>
                {getRarityStr(rarity)}
              </Card.Title>
              <p className={style.rarityValue}>{rarityFormat(rarity)}</p>
            </Card.Body>
          )}
        </Card>
      </div>
    </Col>
  );
};

export default NFTSaleItem;
