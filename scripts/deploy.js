const {
  experimentalAddHardhatNetworkMessageTraceHook,
} = require("hardhat/config")

// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory("Box")
  console.log("Deploying Box...")
  const box = await Box.deploy()
  await box.deployed()
  console.log(`Box deployed to: ${box.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

// Note local blockchains do not persist their state - if closed then need to redeploy contract
// Run the local blockchain in another terminal

// 0x5FbDB2315678afecb367f032d93F642f64180aa3
