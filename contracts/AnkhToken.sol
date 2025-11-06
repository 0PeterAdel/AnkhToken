// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// We import the ready-made and secure ERC-20 code
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// This is our contract
contract AnkhToken is ERC20 {
    
    // constructor: It is run only once upon deployment
    constructor() ERC20("Ankh Life", "ANKH") {
        
        //We "mint" or "print" one billion coins and send them to the "contract issuer" (you).
        _mint(msg.sender, 1000000000 * (10 ** 18));
    }
}