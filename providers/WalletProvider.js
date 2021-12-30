import { createContext, useState } from "react";

const WalletContext = createContext({
  userWallet: "",
  setUserWallet: (_userWallet) =>
    console.error("Please implement this function."),
});

const WalletContextProvider = ({ children }) => {
  const [userWallet, setUserWallet] = useState("");

  return (
    <WalletContext.Provider
      value={{
        userWallet,
        setUserWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletContextProvider };
