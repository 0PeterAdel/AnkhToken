import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// This is the $ANKH publishing "module"
const AnkhTokenModule = buildModule("AnkhTokenModule", (m) => {
  // We tell "m" (module builder) that we want to publish a contract named "AnkhToken"
  // The brackets [] mean that the constructor does not take any parameters.
  const ankhToken = m.contract("AnkhToken", []);

  // We are republishing the contract.
  return { ankhToken };
});

export default AnkhTokenModule;