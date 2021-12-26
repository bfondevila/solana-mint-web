import { Button } from "react-bootstrap";
import style from "./opensea_button.module.scss"

const OpenseaButton = (props) => {
  return (
    <div className={"text-center " + style.btn_container}>
      <Button href={"https://testnets.opensea.io/" + props.wallet}>OPENSEA</Button>
    </div>
  );
};

export default OpenseaButton;
