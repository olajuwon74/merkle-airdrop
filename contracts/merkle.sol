// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Merkle{

    bytes32 public merkleRoot = "0xc353246cdaab2cbf8e8576d32e22ee1be1da0706904331692ba951dd3119e3c9";


    mapping(address => bool) public claimedAdrress; 

    uint index;

    function claimAirdrop(bytes32[] calldata _proof, uint id, uint amount) public {
        require (!claimedAdrress[msg.sender], "address already claimed");

        bytes32 leaf = keccak256(abi.encode(msg.sender));

        require(MerkleProof.verify(_proof, merkleRoot, leaf), "invalid");

        claimedAdrress[msg.sender] == true;
        IERC20(BRT).transferFrom(address(this), msg.sender, amount);
        index++;
    }

}