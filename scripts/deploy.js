const wait = (seconds) => {
  const milliseconds = seconds * 1000
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {
  console.log(`Preparing Deployment...\n`)
  //Fetch contract to deploy
  const Fastlane = await ethers.getContractFactory('Fastlane')
  //Fetch Accounts
  const accounts = await ethers.getSigners()
  //Delploy Contract
  const fastlane = await Fastlane.deploy("Fastlane", ethers.utils.parseEther('20'))//put deploy perameters here
  await fastlane.deployed()
  console.log(`Contract Deployed to: ${fastlane.address}`)
  let transaction
  const owner = accounts[0]
  transaction = await fastlane.connect(owner).addSegemntOwner(owner.address)
  await transaction.wait()
  console.log(`First Segment owner added`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //Code to run script to localhost [npx hardhat run --network localhost scripts/deploy.js]
  //Code to run script to mumbai [npx hardhat run --network mumbai scripts/deploy.js]
  