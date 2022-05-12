const hre = require("hardhat");

async function deploy() {
  const FiapDex = await hre.ethers.getContractFactory("FiapDex");
  const fiapDex = await FiapDex.deploy();

  await fiapDex.deployed();

  console.log("FiapDex deployed to:", fiapDex.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
