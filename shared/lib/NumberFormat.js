import { useRouter } from "next/router";

const NumberFormat = (props) => {
  const locale = useRouter().locale;

  const RARITY_FORMAT = new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: "2",
    maximumFractionDigits: "2",
  });

  return {
    rarity: (value) => RARITY_FORMAT.format(value),
  };
};

export default NumberFormat;
