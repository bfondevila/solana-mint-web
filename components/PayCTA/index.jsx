import { Button } from "react-bootstrap";
import style from "./pay_cta.module.scss";

const PayCTA = () => {
  return (
    <div className={"text-center " + style.btn_container}>
      <Button href="/">PAGAR CON PAYPAL</Button>
      <Button href="/">PAGAR CON MATIC</Button>
    </div>
  );
};

export default PayCTA;
