pragma solidity >=0.5.0;

/*
 * AdeSwapFinance 
 * App:             https://adeswap.finance
 * Medium:          https://ade-swap.medium.com    
 * Twitter:         https://twitter.com/ade_swap 
 * Telegram:        https://t.me/ade_swap
 * Announcements:   https://t.me/ade_swap_news
 * GitHub:          https://github.com/AdeSwapFinance
 */

interface IAdeFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
}
