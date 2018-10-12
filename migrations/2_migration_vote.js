var voting = artifacts.require("./Voting.sol");
var safemath = artifacts.require("./SafeMath.sol");

module.exports = function(deployer) {
  deployer.deploy(safemath);
  deployer.link(safemath, voting);
  deployer.deploy(voting, ["apple", "banana", "orange","peach", "lemon", "pear", "grape"]);
};
