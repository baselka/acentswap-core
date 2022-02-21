# Ade Factory
[![Test Contracts](https://github.com/AdeSwapFinance/adeswap-swap-core/actions/workflows/test-contracts.yml/badge.svg)](https://github.com/AdeSwapFinance/adeswap-swap-core/actions/workflows/test-contracts.yml)

In-depth documentation on AdeSwap is available at [adeswap docs](https://adeswap.gitbook.io/adeswap-finance/).

# Local Development

The following assumes the use of `node@>=14`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Migrate Contracts

### Setup 
Create a `.env` file in the root directory of this project. Copy in the variables from `.env.example` and fill them in as needed. The API key is needed to verify the contracts after a migration, but it's not needed for a migration. 


### Migrate 
The following networks are currently configured for migration: 
- `bsc`
- `bscTestnet`
- `polygon` 
- `polygonTestnet`

`npx truffle migrate --network <network-name>`

## Run Tests


`yarn test`
