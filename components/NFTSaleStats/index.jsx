import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  getNFTSaleFinishTime,
  getTotalMoneyRaisedEuros,
  lastNFTMintedTime,
} from "../../shared/lib/Crypto";
import style from "./nft_sales_stats.module.scss";

const currentDate = Math.floor(Date.now() / 1000);

const NFTSaleStats = (props) => {
  // temp. Must be filled by backend
  const [totalSales, setTotalSales] = useState(0);
  const [lastSale, setLastSale] = useState();
  const [saleFinishTime, setSaleFinishTime] = useState();
  const [daysToDeadline, setDaysToDeadline] = useState(0);
  const [hoursToDeadline, setHoursToDeadline] = useState(0);
  const [minToDeadline, setMinToDeadline] = useState(0);
  const [secToDeadline, setSecToDeadline] = useState(0);

  useEffect(async () => {
    setTotalSales(Math.floor(await getTotalMoneyRaisedEuros()));
    const seconds = currentDate - (await lastNFTMintedTime());
    if (seconds / 3600 > 1) {
      setLastSale(Math.floor(seconds / 3600) + " horas");
    } else if (seconds / 60 > 1) {
      setLastSale(Math.floor(seconds / 60) + " minutos");
    } else {
      setLastSale(seconds + " segundos");
    }

    setSaleFinishTime(await getNFTSaleFinishTime());
    var finishSeconds = saleFinishTime - currentDate;
    const days = Math.floor(finishSeconds / 86400);
    setDaysToDeadline(days);
    finishSeconds -= days * 86400;
    const hours = Math.floor(finishSeconds / 3600) % 24;
    setHoursToDeadline(hours);
    finishSeconds -= hours * 3600;
    const minutes = Math.floor(finishSeconds / 60) % 60;
    setMinToDeadline(minutes);
    finishSeconds -= minutes * 60;
    setSecToDeadline(seconds % 60);
  });

  return (
    <Container className="text-center">
      <p className={style.stats}>
        {totalSales}€ han sido recaudados para La Palma, la última compra hace{" "}
        {lastSale}
      </p>
      <p className={style.countdown}>
        La venta finaliza en {daysToDeadline} días, {hoursToDeadline} horas,{" "}
        {minToDeadline} minutos, {secToDeadline} segundos
      </p>
    </Container>
  );
};

export default NFTSaleStats;
