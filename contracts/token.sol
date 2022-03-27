//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import  "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9

contract BRT is ERC20 {
    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint((0xfbbd44097FF2F2e252c91C27DE5C5439D898186A), 10 * 10 ** 18);
    }
}