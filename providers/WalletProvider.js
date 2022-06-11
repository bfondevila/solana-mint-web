import { createContext, useState } from "react";

const WalletContext = createContext({
  userWallet: "",
  setUserWallet: (_userWallet) =>
    console.error("Please implement this function."),
  publicKey: "",
  setPublicKey: (_userWallet) =>
    console.error("Please implement this function."),
});

const WalletContextProvider = ({ children }) => {
  const [userWallet, setUserWallet] = useState("");
  const [publicKey, setPublicKey] = useState("");

  return (
    <WalletContext.Provider
      value={{
        userWallet,
        setUserWallet,
        publicKey,
        setPublicKey,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletContextProvider };
