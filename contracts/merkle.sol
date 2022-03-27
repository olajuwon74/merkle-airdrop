// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Merkle{

    IERC20 BRT;
    bytes32 merkleRoot = 0x537c7f3bc2c13796a9f1275aefd246d169e735fe63e532751f052187b64a460a;

    constructor(address _BRTAddress){
        BRT = IERC20(_BRTAddress);
    }

    


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
