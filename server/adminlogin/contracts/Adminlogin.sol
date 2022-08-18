//SPDX-License-Indentifier:MIT

pragma solidity >=0.5.0 <0.9.0;

contract Adminlogin{

    //Now this is the mapping where the owner of the smart contract stores addresses
    mapping(address=>bool) private admins;

    //This is the mapping where which stores the addresses of the admins to the universities they are part of
    mapping(address=>string) private universities;


    //This is the array that stores the values of all the admin addresses
    address [] adminsarr;

    //These are the events that will be emitted once a task is successfully completed
    event Assigned(address indexed admin,uint timestamp);

    address private owner;

    constructor(address _owner)
    {
        //So we assign the address to the owner
        owner=_owner;
    }

    modifier owneronly{
        require(msg.sender==owner,"Only the owner of the smart contract can assign the admins");
        _;
    }

    function assignadmin(address _admin,string memory university) external owneronly{
        //Inside this function we are assigning the admins in the mapping
        admins[_admin]=true;
        universities[_admin]=university;
        adminsarr.push(_admin);
        emit Assigned(_admin,block.timestamp);
    }

    function removeadmin(address _admin) external owneronly{
        admins[_admin]=false;
        universities[_admin]='';
    }

    modifier higherauthority{
        require(admins[msg.sender]==true);
        _;
    }

    function getadmindetails() higherauthority external returns(string memory){
        return universities[msg.sender];
    }

    function returnalladmins() external owneronly returns(address [] memory)
    {
       return adminsarr;
    }

    function changeuniversity(string memory newuni,address admin) owneronly external{
        universities[msg.sender]=newuni;
    }

    function getowner() external view returns(address)
    {
        return owner;
    }

    function login(address _admin) external higherauthority returns(bool)
    {
        //So this basically means that the owner has assigned the admin for that particular college
        //Hence the login is successful and you can procede to other tasks
        return admins[msg.sender];
    }


}
