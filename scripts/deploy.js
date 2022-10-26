const { ether, ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("Nft");
  const contract = await contractFactory.deploy("Ticket", "nft");
  console.log(contract.deployed());
  console.log("Contract deployed successfully.....");
  console.log(contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
