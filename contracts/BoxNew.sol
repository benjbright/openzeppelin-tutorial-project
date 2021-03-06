// contracts/BoxNew.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BoxNew {
    uint256 private _value;

    // Emitted when the store changes
    event ValueChanged(uint256 value);

    // Stores new value in the contract
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}
