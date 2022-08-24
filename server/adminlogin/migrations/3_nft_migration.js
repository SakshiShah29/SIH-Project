const NFT = artifacts.require("NFT");

//This is the account address which is the owner of the smart contract
const account = "0x755E7A5F0332C0E5D81Af09665A971d20872117d";

module.exports = function (deployer) {
  deployer.deploy(NFT);
};
