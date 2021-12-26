import { useRouter } from "next/router";

const NumberFormat = (props) => {
  const locale = useRouter().locale;

  const RARITY_FORMAT = new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: "2",
    maximumFractionDigits: "2",
  });

  const EUROS = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: "0",
    maximumFractionDigits: "0",
  });

  return {
    euros: (value) => EUROS.format(value),
    matic: (value) => value + " MATIC",
    rarity: (value) => RARITY_FORMAT.format(value),
  };
};

export default NumberFormat;
