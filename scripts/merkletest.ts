
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Signer } from "ethers";
import { ethers } from "hardhat";
const MerkleRoot = "0xc353246cdaab2cbf8e8576d32e22ee1be1da0706904331692ba951dd3119e3c9"
const BRTcoin = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const airdropClaimer = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
async function main() {

    // deploting the Bored ape tokens
    const airdrop = await ethers.getContractAt("Merkle", "0x7175A987B7976acf4f408B8B746eB4A7b8fc31Aa");
    // const airdrop = await airdropFactory.deploy(MerkleRoot)
    // airdrop.deployed()

    // console.log("airdrop contract", airdrop.address);

    const brt = await ethers.getContractAt("IERC20", BRTcoin);
    console.log("transfering tokens from myself to the airdrop contract")
    const signer:SignerWithAddress[] = await ethers.getSigners()
    // console.log()
    console.log(await brt.balanceOf(signer[0].address))
    // await Jupiter.transfer(airdrop.address, "90000000000000000000000000")
    // console.log("Airdrop balance:", await airdrop.checkTokenBalance());

    // // const airdrop = await ethers.getContractAt("Airdrop", '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512')
    // await airdrop.claimAirdrops(20, ['0x6e548827555feb2dd603e24dadfbd63eda2170c4901dd0cd8b3277c67826f3c6'])
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
