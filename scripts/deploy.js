async function main() {
	const ERC20UpgradeableContract = await ethers.getContractFactory("ERC20Upgradeable");
	console.log("Deploying ERC20UpgradeableContract...");
	const suffrage = await upgrades.deployProxy(ERC20UpgradeableContract, ["suffrage", "SUF"], { initializer: 'initialize' });
	await suffrage.deployed();
	console.log("ERC20Upgradeable deployed to:", suffrage.address);
}

main();