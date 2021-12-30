import React, { useEffect, useState } from "react";

const Timer = (props) => {
  const { deadline } = props;

  if (deadline === null) {
    return null;
  }

  const calculateTimeLeft = () => {
    const difference = +new Date(deadline * 1000) - +new Date();
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

  const timerComponents = ["La venta finaliza en "];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={timerComponents.length}>
        {timeLeft[interval]} {interval}{" "}
      </span>,
    );
  });

  return (
    <>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>La venta de NFTs ha finalizado.</span>
      )}
    </>
  );
};

export default Timer;
