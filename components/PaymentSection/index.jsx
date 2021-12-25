import PayCTA from "../../components/PayCTA";
import style from "./payment_section.module.scss";

const PaymentSection = () => (
  <div className={"grey_background " + style.pay_section_container}>
    <h2>¡HAZTE CON ESTA PIEZA ÚNICA!</h2>
    <PayCTA />
  </div>
);

export default PaymentSection;
