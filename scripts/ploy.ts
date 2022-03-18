/* eslint-disable prettier/prettier */

const { ethers } = require("hardhat");

async function main() {

    const Token = await ethers.getContractFactory("BRT");
    const token = await Token.deploy("BRT","B");


  await token.deployed();

 console.log("BRT deployed to:", token.address);
 const balance = await token.totalSupply();
 console.log(`this is the total supply ${balance}`);
// const instance = await ethers.getContractAt("BRT", "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");
// const balance = await instance.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
// console.log(balance);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// token address = 00x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0