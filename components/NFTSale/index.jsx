import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import NFTSaleItem from "./NFTSaleItem";

const NFTSale = (props) => {
  //Any JS code here runs once every time the component is rendered. A component is re-rendered every time its state changes
  // console.log("Server test"); //This shows a message in the nodejs server console (never in the client)

  useEffect(async () => {
    //Any JS code here runs client-side
    //Use for example to attach native JS event listeners

    // console.log("Client side test"); //This shows a message in the users' browser console

    return () => {}; //Any JS code here runs when the component is unmounted; use for example to detach native JS event listeners, if you added any
  }, []);

  const nftRarityExamples = [
    {
      img: "/images/hero.png",
      rarity: 0.01,
    },
    {
      img: "/images/hero.png",
      rarity: 0.02,
    },
    {
      img: "/images/hero.png",
      rarity: 1.0,
    },
    {
      img: "/images/hero.png",
      rarity: 10.0,
    },
  ];

  return (
    <Row>
      {nftRarityExamples.map((item, index) => {
        return (
          <NFTSaleItem
            imageUrl={item.img}
            rarity={item.rarity}
            className="sm-2"
            key={index}
          />
        );
      })}
    </Row>
  );
};

export default NFTSale;
