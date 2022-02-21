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

interface IAdeCallee {
    function adeCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
