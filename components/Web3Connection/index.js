import MetamaskConnection from "../MetamaskConnection";

const Web3Connection = ({
  displayFullAddress,
  displayWithLink,
  normalButtonSize,
}) => {
  return (
    <MetamaskConnection
      displayFullAddress={displayFullAddress}
      displayWithLink={displayWithLink}
      normalButtonSize={normalButtonSize}
    />
  );
};

export default Web3Connection;
