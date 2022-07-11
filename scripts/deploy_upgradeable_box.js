// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat")

async function main() {
  const Box = await ethers.getContractFactory("BoxNew")
  console.log("Deploying BoxNew...")
  const box = await upgrades.deployProxy(Box, [42], { initializer: "store" })
  await box.deployed()
  console.log(`BoxNew deployed to: ${box.address}`)
}

main()

// 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
