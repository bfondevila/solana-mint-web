import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  getPublicInfo,
  getTotalMoneyRaisedEuros,
} from "../../shared/lib/Crypto";
import style from "./nft_sales_stats.module.scss";
import Timer from "./Timer";

const NFTSaleStats = (props) => {
  const [totalSales, setTotalSales] = useState(0);
  const [lastSale, setLastSale] = useState();
  const [saleFinishTime, setSaleFinishTime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      getPublicInfo().then(({ lastTokenId, lastMinted, saleFinishTime }) => {
        setTotalSales(Math.floor(getTotalMoneyRaisedEuros(lastTokenId - 1)));
        setSaleFinishTime(saleFinishTime);

        const currentDate = Math.floor(Date.now() / 1000);
        const seconds = currentDate - lastMinted;
        if (seconds / 3600 > 1) {
          setLastSale(Math.floor(seconds / 3600) + " horas");
        } else if (seconds / 60 > 1) {
          setLastSale(Math.floor(seconds / 60) + " minutos");
        } else {
          setLastSale(seconds + " segundos");
        }
      });
    };

    fetchData();
  }, []);

  return (
    <Container className="text-center">
      <p className={style.moneySummary}>{totalSales}€</p>
      <p className={style.stats}>Han sido recaudados para La Palma</p>
      <p className={style.countdown}>
        <Timer deadline={saleFinishTime} />
      </p>
    </Container>
  );
};

export default NFTSaleStats;
