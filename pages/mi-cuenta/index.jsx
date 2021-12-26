import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NFTSaleItem from "../../components/NFTSale/NFTSaleItem";
import { Contract } from "../../constants/contract";
import {
  getMintData,
  getNFTSaleFinishTime,
  getNFTsFromAddress,
  getPricePerNFT,
  getPricePerNFTInWei,
  getTotalMoneyRaisedEuros,
  getTotalNFTSold,
  lastNFTMintedTime,
} from "../../shared/lib/Crypto";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";

export default function MyAccount() {
  const [userWallet, setUserWallet] = useState("");
  const [NFTsSold, setNFTsSold] = useState("");
  const [moneyRaised, setMoneyRaised] = useState(0);
  const [NFTSaleFinishTime, setNFTSaleFinishTime] = useState();
  const [pricePerNFT, setPricePerNFT] = useState(0);
  const [pricePerNFTInWei, setPricePerNFTInWei] = useState(0);
  const [lastMintedNFTTime, setLastMintedNFTTime] = useState();
  const [NFTsInWallet, setNFTsInWallet] = useState([]);
  const [transactionHash, setTransactionHash] = useState();

  const isConnected = () => {
    return userWallet !== "";
  };

  const mint = async (amount) => {
    if (userWallet == "") {
      alert("Error: wallet not connected");
    }

    const transactionParameters = {
      to: Contract.address,
      from: ethereum.selectedAddress,
      data: getMintData(userWallet, amount),
      value: "0x" + (+pricePerNFTInWei * amount).toString(16),
    };

    // As with any RPC call, it may throw an error
    try {
      const txHash = await ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      setTransactionHash(txHash);
    } catch (error) {
      alert("Error");
      console.log(error);
    }
  };

  const handleAccountsChanged = async (accounts) => {
    setUserWallet(accounts.length > 0 ? accounts[0] : "");
    if (accounts.length > 0) {
      setNFTsInWallet(await Promise.all(await getNFTsFromAddress(accounts[0])));
    }
  };

  useEffect(async () => {
    setNFTsSold(await getTotalNFTSold());
    setMoneyRaised(await getTotalMoneyRaisedEuros());
    setNFTSaleFinishTime(await getNFTSaleFinishTime());
    setPricePerNFT(await getPricePerNFT());
    setPricePerNFTInWei(await getPricePerNFTInWei());
    setLastMintedNFTTime(await lastNFTMintedTime());
  });

  return (
    <Container>
      <Header onAccountsChanged={handleAccountsChanged} />
      <Container>
        <h1>Contract stats (does not need a wallet connected)</h1>
        <p>
          Contract address:{" "}
          <a
            target="_blank"
            href={
              Contract.blockExplorerUrls[0] + "/address/" + Contract.address
            }
          >
            {Contract.address}
          </a>
        </p>
        <p>NFTs sold to date: {NFTsSold}</p>
        <p>Money raised: {moneyRaised}&euro;</p>
        <p>Date of NFT sale finishing: {NFTSaleFinishTime} (UNIX timestamp)</p>
        <p>Price per NFT: {pricePerNFT} MATIC</p>
        <p>Last minted UNIX timestamp: {lastMintedNFTTime}</p>
      </Container>
      <Container>
        <h1>Wallet actions(needs a wallet connected)</h1>
        <p>Wallet address: {userWallet || "Not connected"}</p>
        {isConnected() && (
          <Container>
            <button onClick={() => mint(1)}>Mint 1 NFT</button>
            <button onClick={() => mint(10)}>Mint 10 NFTs</button>
            <p>
              Last transaction requested to the contract:{" "}
              {transactionHash ?? "N/A"}
            </p>
            <p>Number of NFTs owned: {NFTsInWallet.length}</p>
            {NFTsInWallet.map((nft, index) => {
              return (
                <NFTSaleItem
                  imageUrl={nft.image}
                  rarity={nft.rarity / 10000}
                  rarityStr={nft.rarityStr}
                  key={index}
                ></NFTSaleItem>
              );
            })}
          </Container>
        )}
      </Container>
      <Footer />
    </Container>
  );
}
