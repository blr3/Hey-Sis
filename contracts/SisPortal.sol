// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SisPortal {
    uint256 totalVibes;

    constructor() {
        console.log("Smart gang we out here");
    }

    function fax() public {
        totalVibes += 1;
        console.log("%s is speaking facts!", msg.sender);
    }

    function getTotalVibes() public view returns (uint256) {
        console.log("%d people are speaking facts!", totalVibes);
        return totalVibes;
    }
}
