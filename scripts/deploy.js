// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory("Box")
  console.log("Deploying Box...")
  const box = await Box.deploy()
  await box.deployed()
  console.log(`Box deployed to: ${box.address}`)

  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)
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
// Need to explicitly set the network for hardhat to connect to
// Otherwise will default to a new ephemeral network which Box contract wouldn't be deployed to
