# FIAP Dex

This project is a proof of concept of a DEX dApp developed with Solidity.


### Dependencies

- NodeJS 16.x.x
- Hardhat

Install all package dependencies by running

```
npm install
```

### Compiling Solidity contracts

Solidity contracts sit at `contracts` folder.

To compile all contracts run:

```
npx hardhat compile
```

Compiled contracts will sit at `artifacts/contracts` folder.

### Deploying compiled contracts

There is script to deploy the contracts to our local node.

First, run a local Hardhat node with:

```
npx hardhat node
```

In another console window, deploy the contracts to our local node with:

```
npx hardhat run scripts/deploy.js --network localhost
```
