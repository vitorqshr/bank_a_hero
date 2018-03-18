pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract MTC201803180013Token is StandardToken {
  string public name = "MirtiloCoin"; 
  string public symbol = "MTC";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 1000000 * (10 ** decimals);
  uint public tokenArea = 1;


  function MTC201803180013Token() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}