import React from "react";
import { Col, Card } from "react-bootstrap";
import NumberFormat from "../../shared/lib/NumberFormat";
import style from "./nftsale.module.scss";

const NFTSaleItem = (props) => {
  const rarity = props.rarity;
  const rarityStr = props.rarityStr;

  const rarityFormat = NumberFormat().rarity;

  return (
    <Col className={style.wrap} xs={6} md={4}>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Card>
        <Card.Img
          variant="top"
          src={props.imageUrl}
          alt={"NFT tres enanos de rareza " + rarity}
          fluid="true"
        />
        <Card.Body className={style.card_body + " " + props.rarityStr}>
          <Card.Title className={style.team_card_title}>{rarityStr}</Card.Title>
          <Card.Text className={style.team_card_text}>
            {rarityFormat(rarity)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NFTSaleItem;
