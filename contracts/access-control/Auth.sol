// contracts/access-control/Auth.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Auth {
    // Add a simple access control system - store an administrator address
    // Only let Box.sol be used by those accounts that Auth allows
    // NOTE - compiler picks up all accounts in the contracts directory
    address private _administrator;

    constructor(address deployer) {
        // Make the deployer of the contract the administrator
        _administrator = deployer;
    }

    function isAdministrator(address user) public view returns (bool) {
        return user == _administrator;
    }
}
