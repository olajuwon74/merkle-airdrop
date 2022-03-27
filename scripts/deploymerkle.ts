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

// 0x73414aeae8dbefefacb4ded37a275b4607213c10def31e29bcef354a85cadd8e
// 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 airdrop
// 0x5FbDB2315678afecb367f032d93F642f64180aa3 token
