// 
// The FIX: We import the plugin directly for its "side effects" (to modify hre)
// We are NOT importing it into a variable anymore.
// 
// Load the official Hardhat toolbox which provides `ethers`, `waffle`,
// and other commonly-used plugins. This ensures `hre.ethers` / the
// named `ethers` export is available in scripts and tasks.
// Use the installed variant of the toolbox (matches package.json).
import "@nomicfoundation/hardhat-toolbox-mocha-ethers";

import { defineConfig } from "hardhat/config";

// Build the networks object dynamically so we don't include an empty
// `sepolia` entry when env vars are not set (Hardhat will validate the URL).
const networks: Record<string, any> = {
  localhost: {
    type: "http",
    url: "http://127.0.0.1:8545",
  },
};

if (process.env.SEPOLIA_RPC_URL) {
  networks.sepolia = {
    type: "http",
    url: process.env.SEPOLIA_RPC_URL,
    accounts: process.env.SEPOLIA_PRIVATE_KEY ? [process.env.SEPOLIA_PRIVATE_KEY] : [],
  };
}

export default defineConfig({
  solidity: {
    version: "0.8.20",
  },

  networks,
});