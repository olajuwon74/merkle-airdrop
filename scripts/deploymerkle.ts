/* eslint-disable prettier/prettier */

const { ethers } = require("hardhat");
async function main() {
    const brt_address = "0x80c1A926197a5423AB7b8460a92d249999c3fD9a";
    const airdrop = await ethers.getContractFactory("Merkle");
    const airdrop_con = await airdrop.deploy(brt_address);
    await airdrop_con.deployed();

    console.log("airdop deployed to:", airdrop_con.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
