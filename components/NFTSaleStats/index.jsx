import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  getPublicInfo,
  getTotalMoneyRaisedEuros,
} from "../../shared/lib/Crypto";
import style from "./nft_sales_stats.module.scss";

const currentDate = Math.floor(Date.now() / 1000);

const NFTSaleStats = (props) => {
  // temp. Must be filled by backend
  const [totalSales, setTotalSales] = useState(0);
  const [lastSale, setLastSale] = useState();
  const [deadline, setDeadline] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(async () => {
    getPublicInfo().then(({ lastTokenId, lastMinted, saleFinishTime }) => {
      setTotalSales(Math.floor(getTotalMoneyRaisedEuros(lastTokenId)));

      const seconds = currentDate - lastMinted;
      if (seconds / 3600 > 1) {
        setLastSale(Math.floor(seconds / 3600) + " horas");
      } else if (seconds / 60 > 1) {
        setLastSale(Math.floor(seconds / 60) + " minutos");
      } else {
        setLastSale(seconds + " segundos");
      }

      var finishSeconds = saleFinishTime - currentDate;
      const days = Math.floor(finishSeconds / 86400);
      finishSeconds -= days * 86400;
      const hours = Math.floor(finishSeconds / 3600) % 24;
      finishSeconds -= hours * 3600;
      const minutes = Math.floor(finishSeconds / 60) % 60;
      finishSeconds -= minutes * 60;
      setDeadline({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    });
  }, []);

  return (
    <Container className="text-center">
      <p className={style.stats}>
        {totalSales}€ han sido recaudados para La Palma, la última compra hace{" "}
        {lastSale}
      </p>
      <p className={style.countdown}>
        La venta finaliza en {deadline.days} días, {deadline.hours} horas,{" "}
        {deadline.minutes} minutos, {deadline.seconds} segundos
      </p>
    </Container>
  );
};

export default NFTSaleStats;
