import React, { useEffect, useState } from "react";
import style from "./timer.module.scss";

const Timer = (props) => {
  const { deadline } = props;

  if (deadline === null) {
    return null;
  }

  const addZeroToLeft = (value) => {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  };

  const calculateTimeLeft = (prevState) => {
    const difference = +new Date(deadline * 1000) - +new Date();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return [
        {
          type: "días",
          value: addZeroToLeft(days),
          previousValue: prevState?.[0]?.value,
        },
        {
          type: "horas",
          value: addZeroToLeft(hours),
          previousValue: prevState?.[1]?.value,
        },
        {
          type: "minutos",
          value: addZeroToLeft(minutes),
          previousValue: prevState?.[2]?.value,
        },
        {
          type: "segundos",
          value: addZeroToLeft(seconds),
          previousValue: prevState?.[3]?.value,
        },
      ];
    }

    return [];
  };

  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft((prevState) => {
        return calculateTimeLeft(prevState);
      });
    };

    setInterval(updateTimer, 1000);

    return () => {
      clearInterval(updateTimer);
    };
  }, []);

  const zerofill = "00";

  return (
    <>
      {timeLeft?.length ? (
        <div>
          <p>La venta finaliza en:</p>
          <div className={style.flipClock}>
            {timeLeft.map((item) => {
              return (
                <span
                  className={style.piece + " " + style.flip}
                  key={`${item.type}_${item.value}`}
                >
                  <span className={style.flipCard}>
                    <b className={style.top}>{item.value | zerofill}</b>
                    <b
                      className={style.bottom}
                      data-value={item.value | zerofill}
                    ></b>
                    <b
                      className={style.back}
                      data-value={item.previousValue | zerofill}
                    ></b>
                    <b
                      className={style.backBottom}
                      data-value={item.previousValue | zerofill}
                    ></b>
                  </span>
                  <span className={style.slot}>{item.type}</span>
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        <span>La venta de NFTs ha finalizado</span>
      )}
    </>
  );
};

export default Timer;
