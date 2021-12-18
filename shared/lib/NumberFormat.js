import { useRouter } from "next/router";

const NumberFormat = (props) => {
  const locale = useRouter().locale;

  const USD_FORMAT = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: "2",
    maximumFractionDigits: "2",
  });

  const RARITY_FORMAT = new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: "2",
    maximumFractionDigits: "2",
  });

  return {
    usd: (value) => USD_FORMAT.format(value),
    rarity: (value) => RARITY_FORMAT.format(value),
  };
};

export default NumberFormat;
