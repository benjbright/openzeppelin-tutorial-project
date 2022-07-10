// test/Box.test.js
// Load dependencies
const { expect } = require("chai")

// Import utilities from Test Helpers
// const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers")

// Load compiled artifacts
// const Box = artifacts.require("Box")

// Start a test block
// Contract("Box", function ([owner, other]) {
//   // Use large integers ('big numbers')
//   const value = new BN("42")

//   beforeEach(async function () {
//     this.box = await Box.new({ from: owner })
//   })

//   it("retrieve returns a value previously stored", async function () {
//     await this.box.store(value, { from: owner })

//     // Use large integer comparisons
//     expect(await this.box.retrieve()).to.be.bignumber.equal(value)
//   })
// })

describe("Box", function () {
  before(async function () {
    this.Box = await ethers.getContractFactory("Box")
  })

  beforeEach(async function () {
    this.box = await this.Box.deploy()
    await this.box.deployed()
  })

  // Test case
  it("retrieve returns a value previously stored", async function () {
    // Store a value
    await this.box.store(42)

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.box.retrieve()).toString()).to.equal("42")
  })
})
