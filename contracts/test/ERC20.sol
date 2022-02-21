pragma solidity =0.5.16;

import '../AdeERC20.sol';

contract ERC20 is AdeERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
