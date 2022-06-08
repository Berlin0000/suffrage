/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
const {mnemonic, infuraProjId, etherscanKey} = require("./secrets.json");

module.exports = {
	solidity: "0.8.4",
	networks: {
		ropsten: {
			url: `https://ropsten.infura.io/v3/${infuraProjId}`,
			accounts: {mnemonic: mnemonic}
		},
		// binance: {
		// 	url: "https://data-seed-prebsc-1-s1.binance.org:8545",
		// 	chainId: 97,
		// 	gasPrice: 20000000000,
		// 	accounts: {mnemonic: mnemonic}
		// }
	},

	etherscan: {
		apiKey: etherscanKey
	}
};
