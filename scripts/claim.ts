/* eslint-disable prettier/prettier */

const { ethers } = require("hardhat");
async function main() {
  const valid_address = "0xfbbd44097FF2F2e252c91C27DE5C5439D898186A";
  const merkle_address = "0xF9C90fAdEBe19117a000588E3ff5D6A8AAF00f57";
  const BRT_address = "0x80c1A926197a5423AB7b8460a92d249999c3fD9a"
  const claimer = await ethers.getSigner(valid_address);

  
  const brt = await ethers.getContractAt("BRT", BRT_address, claimer);
  console.log("(Before) BRT balance of claimer => ", (await brt.balanceOf(claimer.address)).toString());
  await brt.transfer(merkle_address, "10000000000");
  let balclaim = await brt.balanceOf(claimer.address);
  const balmerk = await brt.balanceOf(merkle_address);

  console.log("(After) BRT balance of claimer => ", balclaim.toString());
  console.log("(After) BRT balance of merkle => ", balmerk.toString());


  const merkle_tree = await ethers.getContractAt(
    "Merkle",
    merkle_address,
    claimer
  );
  const claim_token = await merkle_tree
    .claimAirdrop(
      [
        
      ],
      "10000000000"
    );
  console.log("receipt for airdrop claiming by claimer => ", claim_token);

  balclaim = await brt.balanceOf(claimer.address);
  console.log("(end) BRT balance of claimer => ", balclaim.toString());
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

