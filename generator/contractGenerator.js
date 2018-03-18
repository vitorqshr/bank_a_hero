const fs = require('fs');
const cp = require('child_process');

const createToken = (tokenInfo) => {

}

let tokenName = process.argv[2];
let tokenSymbol = process.argv[3];
let tokenSupply = process.argv[4];
let tokenArea = process.argv[5];


let version = new Date()
  .toISOString()
  .substr(0, 16)
  .replace(/\D/g, '');

const templateToken = `pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract ${tokenSymbol}${version}Token is StandardToken {
  string public name = "${tokenName}"; 
  string public symbol = "${tokenSymbol}";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = ${tokenSupply} * (10 ** decimals);
  uint public tokenArea = ${tokenArea};


  function ${tokenSymbol}${version}Token() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}`;


const templateMigration = `var ${tokenSymbol}${version}Token = artifacts.require("./${tokenSymbol}${version}Token.sol");

module.exports = function(deployer) {
  deployer.deploy(${tokenSymbol}${version}Token);
}`;




fs.writeFileSync(
    `./contracts/${version}Token.sol`,
    templateToken,
    'utf8',
  );


fs.writeFileSync(
    `./migrations/${version}_deploy_token.js`,
    templateMigration,
    'utf8',
  );

  const truffleDeployment = cp.spawnSync('truffle', ['deploy' , '--network', 'ropsten']);

  //const truffleDeployment = cp.spawnSync('truffle', ['compile']);

  console.log(''+ truffleDeployment.stdout);

  /*var data = `Running migration: 201803172342_deploy_token.js
  Deploying TST201803172342Token...
  ... 0x5f1cf94a1fc82641c02abcdac3b4827df61b6f79f7c077ff8a09bd4cd9d35993
  TST201803172342Token: 0x9aaa33c9dd6918dcc461a8fa0720ecd18fb4638b
Saving successful migration to network...
  ... 0x5dee9df54a31e6a54937e870ede14864a28ce11ea29ec2c14b69414f9ed1d177
Saving artifacts...
Running migration: 201803172343_deploy_token.js
  Deploying TST201803172343Token...
  ... 0xe2dc49c7f420af3c54b65e7bd90dc9a73fb8a369da64deebe2628fb7602e592a
  TST201803172343Token: 0xf3b268e85c3ea84674140375f1eb5d7245b0308b
Saving successful migration to network...
  ... 0x61fe10bd50371fc0929dc81e1b54b3103d9b56084dbabfe0976a6eb5e58d9eff
Saving artifacts...
Running migration: 201803172344_deploy_token.js
  Deploying TST201803172344Token...
  ... 0xbca00a53824800ea599b0f84b82edbae8d913b2cfccc322aa8ffc32bb170a1e8
  TST201803172344Token: 0x78e2daee4cdb8b8acc40ae0047f8a61d0a50ab14
Saving successful migration to network...
  ... 0x3506f18b77016aa6ab001a1a834a62dba3cc4588b8b3e54b0fd51a80f1d5b200
Saving artifacts...`;
version = "201803172344";
  var replace = `[\n\r]*${version}Token:\s*([^\n\r]*))`;
  var re = new RegExp(replace,"");
  let matched = JSON.stringify(data).replace(re,'')
  matched = matched.replace(`${version}Token: `, "");
  //console.log(`stdout: ${data}`);
  console.log(`matched : ${data}`)*/


  /*truffleDeployment.stdout.on('data', (data) => {
    var replace = `[\n\r]*${version}Token:\s*([^\n\r]*))`;
    var re = new RegExp(replace,"");
    let matched = JSON.stringify(data).replace(re,'')
    matched = matched.replace(`${version}Token: `, "");
    //console.log(`stdout: ${data}`);
    console.log(`matched : ${data}`)
  });*/





