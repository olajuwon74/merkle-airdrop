// /* eslint-disable prettier/prettier */

// const { ethers } = require("hardhat");
// async function main() {

//     // const airdrop = await ethers.getContractFactory("Merkle");
//     const airdrop = await airdropFactory.deploy(MerkleRoot)
//     airdrop.deployed()
//     // airdrop.deployed("0xc353246cdaab2cbf8e8576d32e22ee1be1da0706904331692ba951dd3119e3c9");

//  console.log("airdrop deployed to:", airdrop.address);
//  const balance = await airdrop.totalSupply();
//  console.log(`this is the total supply ${balance}`);
//  // await Jupiter.transfer(airdrop.address, "90000000000000000000000000")
//     // console.log("Airdrop balance:", await airdrop.checkTokenBalance());

// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

/* eslint-disable prettier/prettier */

const { ethers } = require("hardhat");
async function main() {
  const signers = await ethers.getSigners();
  const claimer = await ethers.getSigner(signers[0].address);

  //     const airdrop = await ethers.getContractFactory("Merkle");
  //     const airdrop_con = await airdrop.deploy("0x867bb7f70df1544a018e172f6c1fe4f2673061fecddac57dd18a3477d2cf00ca")
  //     await airdrop_con.deployed();

  //  console.log("airdop deployed to:", airdrop_con.address);

  
  

  const trans = await ethers.getContractAt("BRT", "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");
  console.log("(Before) BRT balance of claimer => ", (await trans.balanceOf(claimer.address)).toString());
  await trans.connect(claimer).transfer("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9", "10000000000");
  const balclaim = await trans.balanceOf(claimer.address);
  const balmerk = await trans.balanceOf("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");

  console.log("(After) BRT balance of claimer => ", balclaim.toString());
  console.log("(After) BRT balance of 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 => ", balmerk.toString());
  
  



  const merkle_tree = await ethers.getContractAt(
    "Merkle",
    "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
  );
  const claim_token = await merkle_tree
    .connect(claimer)
    .claimAirdrop(
      [
        "0xff933ad789130e2d86d711e361c0fbafc5f7c27fc02136d6a580cf62f8edb255",
        "0x34ee00f9e71d899463098b031ffd8cbc34ea5d70c5bcbb3794505deeadf41c19",
      ],
      "10000000000"
    );
  console.log("receipt for airdrop claiming by claimer => ", claim_token);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x73414aeae8dbefefacb4ded37a275b4607213c10def31e29bcef354a85cadd8e
// 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 airdrop
// 0x5FbDB2315678afecb367f032d93F642f64180aa3 token
