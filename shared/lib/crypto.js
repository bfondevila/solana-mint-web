import Web3 from "web3";
import { Contract } from "../../constants/contract";

const web3 = new Web3(Contract.rpcUrls[0]);
const contract = new web3.eth.Contract(Contract.abi, Contract.address);

const getIPFSGateway = (url) => {
  return url.replace("ipfs://", "https://ipfs.io/ipfs/");
};

/**
 * @returns Number of NFTs sold to date
 */
const getTotalNFTSold = async () => {
  return (await contract.methods.lastTokenId().call()) - 1; //The original is not sold, so we discount it
};

const getTotalMoneyRaisedEuros = async () => {
  return +(await getTotalNFTSold()) * 0.8 * 20;
};

/**
 * Get all the NFTs owned by an account
 * @address string
 * @returns array of NFT objects with their properties (imgUrl, rarity, etc.)
 */
const getNFTsFromAddress = async (address) => {
  if (!address) {
    return [];
  }

  const tokenCount = await contract.methods.balanceOf(address).call();

  const tokenIds = [];
  for (let i = 0; i < tokenCount; i++) {
    tokenIds.push(
      await contract.methods.tokenOfOwnerByIndex(address, i).call(),
    );
  }

  return tokenIds.map(async (id) => {
    return await getNFTProperties(id);
  });
};

/**
 * @returns A unix timestamp with the NFT sale end time (UTC time)
 */
const getNFTSaleFinishTime = async () => {
  return await contract.methods.saleFinishTime().call();
};

const getPricePerNFT = async () => {
  return (await getPricePerNFTInWei()) / 10 ** Contract.nativeCurrency.decimals;
};

const getPricePerNFTInWei = async () => {
  return await contract.methods.NFT_PRICE().call();
};

/**
 * Gets the properties of the NFT with a given ID (or null if it has not been revealed)
 * @returns an object with the following properties:
 * "rarity" (as an int), "color1", "color2", "color3",
 * "imgUrl" (a renderizable img url), "rarityStr" (as a string)
 * @see getRarityLevel(rarity: int) to retrieve rarity as a string
 */
const getNFTProperties = async (nftId) => {
  if (!nftId) {
    return {};
  }

  const properties = await contract.methods.tokenProperties(nftId).call();
  if (properties.color1 === "") {
    return null; //Pending reveal
  } else {
    const tokenURI = await contract.methods.tokenURI(nftId).call();
    const tokenMetadata = await fetch(getIPFSGateway(tokenURI))
      .then((response) => response.json())
      .then((responseJson) => {
        return {
          image: getIPFSGateway(responseJson.image),
          rarityStr: responseJson.name,
        };
      })
      .catch((error) => {
        console.log(error); //not fatal, just image not shown
        return {};
      });
    return { ...properties, ...tokenMetadata };
  }
};

/**
 * @returns The UNIX timestamp of the last minted NFT
 */
const lastNFTMintedTime = async () => {
  return await contract.methods.lastMinted().call();
};

const getMintData = (address, amount) => {
  if (!address || !amount) {
    return null;
  }

  return contract.methods.mint(address, amount).encodeABI();
};

export {
  getTotalNFTSold,
  getTotalMoneyRaisedEuros,
  getNFTsFromAddress,
  getNFTSaleFinishTime,
  getPricePerNFT,
  getPricePerNFTInWei,
  getNFTProperties,
  lastNFTMintedTime,
  getMintData,
};
