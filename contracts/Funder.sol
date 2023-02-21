pragma solidity ^0.8.0;

contract Funder{
   uint public numofFunders;

   mapping(uint=>address) private funders;

   function transfer() external payable{
    funders[numofFunders]=msg.sender;
   }

   receive() external payable {
   }

    function withdraw(uint256 withdrawAmount) external {
        require(withdrawAmount <= 2000000000000000000,"Insufficient balance" );
        payable(msg.sender).transfer(withdrawAmount);
    }



}