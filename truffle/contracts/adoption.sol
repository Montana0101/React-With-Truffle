// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Adpotion {
    address[16] public adopters;

    function adpot(uint petId) public returns(uint){
        // 断言
        require(petId>=0 && petId<=15);
        // 以太坊地址
        adopters[petId] = msg.sender;
    }

    function getAdopters() public view returns(address[16] memory){
        return adopters;
    }
}