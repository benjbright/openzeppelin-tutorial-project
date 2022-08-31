// const { ethers } = require("ethers")
// NOTE - run script would not work with this line included?

async function main() {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  const balance = (await ethers.provider.getBalance(accounts[0])).toString()
  console.log(balance)

  //   Set up an ethers contract, representing our deployed Box instance
  const address = "0x4BE5790B3Cd1C226Af06460227ee32922D241074"
  const Box = await ethers.getContractFactory("Box")
  const box = Box.attach(address)

  //   Call the retrieve() function of the deployed Box contract
  const value = await box.retrieve()
  console.log(`Box value is: ${value.toString()}`)

  // Send a transaction to store a new value in the Box
  await box.store(40)

  // Call the retrieve function of the deployed Box contract
  const newValue = await box.retrieve()
  console.log(`New Box value is ${newValue.toString()}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
