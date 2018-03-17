var BankAHeroToken = artifacts.require("./BankAHeroToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BankAHeroToken);
};