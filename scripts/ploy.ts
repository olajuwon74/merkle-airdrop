/* eslint-disable prettier/prettier */

import { ethers } from "hardhat";

async function main() {

    const Token = await ethers.getContractFactory("BRT");
    const token = await Token.deploy("BRT","B");


  await token.deployed();

 console.log("TokenBRT deployed to:", token.address);
 const balance = await token.totalSupply();
 console.log(`this is the total supply ${balance}`);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
