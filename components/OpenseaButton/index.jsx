import { Button } from "react-bootstrap";
import { OPENSEA_RECENT_LINK } from "../../constants/common";
import Image from "../Image";
import style from "./opensea_button.module.scss";

const OpenseaButton = (props) => {
  return (
    <div className={"text-center " + style.btn_container}>
      <Button href={OPENSEA_RECENT_LINK} target="_blank">
        <Image src="/images/OpenSea.png" width={"150px"} />
      </Button>
    </div>
  );
};

export default OpenseaButton;
