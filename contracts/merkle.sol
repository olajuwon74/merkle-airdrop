// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Merkle{

     IERC20 BRT;
    bytes32 merkleRoot;
    address BRTAddress = 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0;
    constructor(bytes32 _merkleRoot){
        BRT = IERC20(BRTAddress);
        merkleRoot = _merkleRoot;
    }

    // bytes32 internal merkleRoot = "0x73414aeae8dbefefacb4ded37a275b4607213c10def31e29bcef354a85cadd8e";


    mapping(address => bool) public claimedAdrress; 

    uint index;

    function claimAirdrop(bytes32[] calldata _proof, uint amount) public {
        require (!claimedAdrress[msg.sender], "address already claimed");

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, amount));

        require(MerkleProof.verify(_proof, merkleRoot, leaf), "no proof");

        claimedAdrress[msg.sender] = true;
        BRT.transfer(msg.sender, amount);
        index++;
    }

      function checkTokenBalance () public view returns (uint256){
        return BRT.balanceOf(address(this));
    }

}
