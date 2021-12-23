import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const NFTSaleStats = (props) => {
  const { totalSales, lastSale, deadline } = props;

  const calculateTimeLeft = () => {
    const difference = +new Date(`${deadline}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>,
    );
  });

  return (
    <Container className="text-center">
      <p>
        {totalSales} han sido recaudados para La Palma, la última compra hace{" "}
        {lastSale}
      </p>
      <p>
        La venta finaliza en{" "}
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>NFT sale has finished.</span>
        )}
      </p>
    </Container>
  );
};

export default NFTSaleStats;
