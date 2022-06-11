import MetamaskConnection from "../MetamaskConnection";
import PhantomConnection from "../PhantomConnection";

const Web3Connection = ({
  displayFullAddress,
  displayWithLink,
  normalButtonSize,
}) => {
  return (
    <PhantomConnection
      displayFullAddress={displayFullAddress}
      displayWithLink={displayWithLink}
      normalButtonSize={normalButtonSize}
    />
  );
};

export default Web3Connection;
