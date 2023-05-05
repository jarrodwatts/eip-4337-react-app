import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";

/**
 * On this page, we create a button that mints an NFT from the connected smart contract wallet.
 * The user first connects their EOA Wallet, which is the signer of the smart contract wallet.
 * Then, they click the "Mint An NFT" button, which calls the "mint" function on the smart contract.
 *
 * This triggers the UserOperation to be sent to the alt mempool, kicking off the EIP-4337 flow.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Account Abstraction</h1>
      <p className={styles.desc}>Mint an NFT from a smart contract wallet</p>

      {/* This button acts as a connect wallet button if one is not already connected. */}
      <Web3Button
        contractAddress="0x91B3Af7afd6B169121Dcce83d4d8377fD6E76285"
        action={(contract) =>
          // Call the "mintTo" function with the following metadata.
          // Metadata is uploaded to IPFS and pinned before the transaction is sent.
          contract.erc721.mint({
            name: "NFT on my AA",
            description: "This is an NFT on my AA",
            image: "ipfs://Qmcny3J5yGpWjJsvR92DQAZcHYWLDep6GdgdKJTRxU1qyo",
          })
        }
      >
        Mint An NFT
      </Web3Button>
    </div>
  );
};

export default Home;
