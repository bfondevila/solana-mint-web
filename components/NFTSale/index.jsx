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
      img: "/images/collection/oro-plata-bronce.png",
      rarity: 0,
      unique: true,
    },
    {
      img: "/images/collection/oro-rojo-azul.png",
      rarity: 0.001,
    },
    {
      img: "/images/collection/rojo-plata-negro.png",
      rarity: 0.002,
    },
    {
      img: "/images/collection/azul-plata-morado.png",
      rarity: 0.002,
    },
    {
      img: "/images/collection/morado-azul-bronce.png",
      rarity: 0.005,
    },
    {
      img: "/images/collection/blanco-verde-bronce.png",
      rarity: 0.005,
    },
    {
      img: "/images/collection/negro-blanco-bronce.png",
      rarity: 0.005,
    },
    {
      img: "/images/collection/rojo-verde-morado.png",
      rarity: 0.01,
    },
    {
      img: "/images/collection/blanco-rojo-azul.png",
      rarity: 0.01,
    },
    {
      img: "/images/collection/blanco-rojo-verde.png",
      rarity: 0.01,
    },
    {
      img: "/images/collection/blanco-verde-rojo.png",
      rarity: 0.013,
    },
    {
      img: "/images/collection/negro-morado-azul.png",
      rarity: 0.015,
    },
    {
      img: "/images/collection/negro-verde-morado.png",
      rarity: 0.015,
    },
    {
      img: "/images/collection/negro-blanco-rojo.png",
      rarity: 0.02,
    },
    {
      img: "/images/collection/morado-azul-blanco.png",
      rarity: 0.04,
    },
    {
      img: "/images/collection/blanco-azul-negro.png",
      rarity: 0.04,
    },
    {
      img: "/images/collection/azul-blanco-negro.png",
      rarity: 0.045,
    },
    {
      img: "/images/collection/morado-verde-blanco.png",
      rarity: 0.05,
    },
    {
      img: "/images/collection/blanco-morado-verde.png",
      rarity: 0.10,
    }, {
      img: "/images/collection/verde-blanco-negro.png",
      rarity: 0.10,
    }, {
      img: "/images/collection/morado-negro-blanco.png",
      rarity: 0.12,
    },
    {
      img: "/images/collection/negro-morado-blanco.png",
      rarity: 0.12,
    },
    {
      img: "/images/collection/morado-blanco-negro.png",
      rarity: 0.132,
    },
    {
      img: "/images/collection/blanco-negro-morado.png",
      rarity: 0.14,
    },
  ];

  return (
    <Row>
      {nftRarityExamples.map((item, index) => {
        return (
          <NFTSaleItem
            imageUrl={item.img}
            rarity={item.rarity}
            unique={item.unique}
            index={index}
            key={index}
          />
        );
      })}
    </Row>
  );
};

export default NFTSale;
