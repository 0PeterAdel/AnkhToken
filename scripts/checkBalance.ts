// Import the named `ethers` helper provided by the Hardhat toolbox.
// This is the recommended way to access `ethers` in scripts.
import hre from "hardhat";

async function main() {
  // --- Configuration ---
  // This is Account #0 from the 'npx hardhat node' output
  const deployerAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
  // This is the contract address from the deployment output
  const ankhTokenAddress = "0x5fbdb2315678afecb367f032d93F642f64180aa3";
  // --- End Configuration ---

  console.log("Connecting to $ANKH token at:", ankhTokenAddress);

  // 1. Get the contract "template" (Factory)
  // Use the Hardhat runtime's ethers instance
  const AnkhToken = await hre.ethers.getContractFactory("AnkhToken");
  
  // 2. Attach our code template to the live address on the network
  const ankh = AnkhToken.attach(ankhTokenAddress);

  console.log("Fetching balance for owner:", deployerAddress);

  // 3. Call the 'balanceOf' function from the contract
  const balance = await ankh.balanceOf(deployerAddress);

  console.log("===================================");
  console.log(`✅ Success!`);
  console.log(`Token: $ANKH`);
  console.log(`Owner: ${deployerAddress}`);
  
  // 4. Use `ethers` again to format the giant number
  // (1,000,000,000 with 18 decimals) into a readable string.
  console.log(`Balance: ${hre.ethers.formatUnits(balance, 18)} $ANKH`);
  console.log("===================================");
}

// Standard Hardhat script runner
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });