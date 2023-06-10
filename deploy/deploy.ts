import fs from 'fs'
import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

const PRIV_KEY = fs.readFileSync(".secret").toString().trim();

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the ZkaPuce contracts`);

  // Initialize the wallet.
  const wallet = new Wallet(PRIV_KEY);

  // Create deployer object and load the artifacts of the contracts you want to deploy.
  const deployer = new Deployer(hre, wallet);
  
/** step 1 
  const ZkaPuceFactoryArtifact = await deployer.loadArtifact("ZkaPuceFactory");
  const ZkaPuceFactoryContract = await deployer.deploy(ZkaPuceFactoryArtifact, [deployer.zkWallet.address]);
  console.log(`ZkaPuceFactory was deployed to ${ZkaPuceFactoryContract.address}`);
  

  const hashval = await ZkaPuceFactoryContract.getInitCodeHash();
  console.log(`ZkaPuceFactory init code hash is ${hashval}`);

*/
    

  //const ZkaPuceFactoryArtifact = await deployer.loadArtifact("ZkaPuceFactory");
  const UniswapRouter02Artifact = await deployer.loadArtifact("UniswapV2Router02");

  //const ZkaPuceFactoryContract = await deployer.deploy(ZkaPuceFactoryArtifact, [deployer.zkWallet.address]);
  const UniswapRouter02Contract = await deployer.deploy(UniswapRouter02Artifact, ['0x57dF05e2D7e1e8A0ACb0ADed567f15784bB5Ce0e','0x000000000000000000000000000000000000800A']);

  console.log(`UniswapRouter02 deployed at ${UniswapRouter02Contract.address}`)
  
}
