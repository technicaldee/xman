const { ThirdwebSDK } = require("@thirdweb-dev/sdk");
const { ethers } = require("ethers");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://alfajores-forno.celo-testnet.org"
  );
  const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);
  const sdk = new ThirdwebSDK(wallet);

  const rewardTokenAddress = "REWARD_TOKEN_CONTRACT_ADDRESS";

  // Deploy the TaskReward contract
  const contractAddress = await sdk.deployer.deployContractFromUri(
    "ipfs://YOUR_CONTRACT_METADATA_URI",
    [rewardTokenAddress]
  );

  console.log("Contract deployed at:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
