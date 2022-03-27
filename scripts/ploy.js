/* eslint-disable prettier/prettier */

const { ethers } = require("hardhat");

async function main() {

//     const Token = await ethers.getContractFactory("BRT");
//     const token = await Token.deploy("BRT","B");


//   await token.deployed();

//  console.log("BRT deployed to:", token.address);
//  const balance = await token.totalSupply();
//  console.log(`this is the total supply ${balance}`);
 
const instance = await ethers.getContractAt("BRT", "0x80c1A926197a5423AB7b8460a92d249999c3fD9a");
const balance = await instance.balanceOf("0xfbbd44097FF2F2e252c91C27DE5C5439D898186A");
console.log(balance);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// token address = 0x80c1A926197a5423AB7b8460a92d249999c3fD9a