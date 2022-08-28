
const hre = require("hardhat");

async function main() {

  const ArtVoting = await hre.ethers.getContractFactory("ArtVoting");
  const artvoting = await ArtVoting.deploy();

  await artvoting.deployed();

  console.log("ArtVoting deployed to:", artvoting.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
