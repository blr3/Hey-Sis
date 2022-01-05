const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  // This will actually compile our contract and generate the necessary files we
  // need to work with our contract under the artifacts directory. Go check it
  // out after you run this :).
  // hre = hardhat runtime environment
  const vibeContractFactory = await hre.ethers.getContractFactory('SisPortal');
  // What's happening here is Hardhat will create a local Ethereum network for
  // us, but just for this contract. Then, after the script completes it'll
  // destroy that local network. So, every time you run the contract, it'll be
  // a fresh blockchain. What's the point? It's kinda like refreshing your
  // local server every time so you always start from a clean slate which makes
  // it easy to debug errors.
  const vibeContract = await vibeContractFactory.deploy();
  // We'll wait until our contract is officially deployed to our local
  // blockchain! Our constructor runs when we actually deploy.
  await vibeContract.deployed();
  // Finally, once it's deployed waveContract.address  will basically give us
  // the address of the deployed contract. This address is how we can actually
  // find our contract on the blockchain. There are millions of contracts on
  // the actual blockchain. So, this address gives us easy access to the
  // contract we're interested in working with! This will be more important a
  // bit later once we deploy to a real Ethereum network.
  console.log("Contract deployed to:", vibeContract.address);
  console.log("Contract deployed by:", owner.address);

  let vibeCount;
  vibeCount = await vibeContract.getTotalVibes();

  let vibeTxn = await vibeContract.fax();
  await vibeTxn.wait();

  vibeCount = await vibeContract.getTotalVibes();

  vibeTxn = await vibeContract.connect(randomPerson).fax();
  await vibeTxn.wait();

  vibeCount = await vibeContract.getTotalVibes();

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
