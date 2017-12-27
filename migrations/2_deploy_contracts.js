var swap = artifacts.require("./GenericSwap.sol");

module.exports = function(deployer) {
  deployer.deploy(swap);
};
