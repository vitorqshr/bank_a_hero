pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract BankAHeroToken is StandardToken {
  string public name = "BankAHero"; 
  string public symbol = "BAH";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);

  function BankAHeroToken() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}