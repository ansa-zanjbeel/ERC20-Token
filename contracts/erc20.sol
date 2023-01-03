// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract mytoken is ERC20 {
    constructor(string memory MyToken, string memory MT) ERC20(MyToken, MT) {}
}
