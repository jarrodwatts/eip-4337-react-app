import type { AppProps } from "next/app";
import { ThirdwebProvider, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

// Mumbai is where our wallet factory and NFT collection are deployed
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      // Define that we only want to support Account Abstraction wallets aka Smart Wallets
      supportedWallets={[
        smartWallet({
          // View my Factory Contract: https://thirdweb.com/mumbai/0x69608a6fE2e1Ce34eAcC4688502b2a2A1209EE2c
          // Deploy your own Factory: https://thirdweb.com/thirdweb.eth/AccountFactory
          factoryAddress: "0x69608a6fE2e1Ce34eAcC4688502b2a2A1209EE2c",

          // Gasless mode on: means the smart wallet does not need to be funded with any ETH / MATIC.
          gasless: true,

          // API Key from the thirdweb dashboard. (You'll want to keep yours a secret)
          thirdwebApiKey:
            "e8472076e04067de52bd9b2251296f60d1da22f07e4c60c6cf8bbcfb3590aa474d045c0c62aeb2f7372b497f30def195f2152625a3603760352461dcbd0e0ed3",
        }),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
