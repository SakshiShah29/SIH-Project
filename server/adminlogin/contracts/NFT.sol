//SPDX-License-Identifier:UNLICENSED

pragma solidity >=0.5.0 <0.9.0;

//This is the smart contract that mints the NFT to the account address of the owner that is dynamically passed
//It also contains a function where the owner can transfer this minted NFT to the leadaccountaddress

//We need to import the following libaries:
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//This is the ERC721URIStorage which is the implementation of the ERC721 Token along with the funtionality that it maps the tokenuri to the 
//given tokenId
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


//This is the Counters library which contains one struct Counter where one could increment the value of the tokenId
//This is useful in case of assigning the tokenIds to the newly minted tokens
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage{
    //Now inide this smart contract we are first going to have the Counters library
    using Counters for Counters.Counter;

    //This is the struct of the Counters library
    Counters.Counter private _tokenIds;

    //This is the constructor which passes the name and the symbol to the frontend
    constructor() ERC721("AICTE","AIC")
    {

    }

    //Now this is the function which returns the number of NFTs the user owns
    //In this function the to address is the admin of the university 
    //The tokenuri that is passed is based on the plagiarsim that is detected for a particular user

    //Hence after the minting function is called the tokens are minted to the account address of the 
    function mintingtoken(address to,string memory tokenuri) public returns(uint)
    {

        //Firstly we need to find the tokenId
        uint _tokenId=_tokenIds.current();

        //This is the mint function which assigns the owner to the tokenId
        _mint(to,_tokenId);

       //This is the function which sets the tokenuri to the given tokenId
        _setTokenURI(_tokenId,tokenuri);

        _tokenIds.increment();
        return _tokenId;
    }

    //This is the function which returns the tokenURI against the tokenid that the user enters
    function gettokenuri(uint tokenId) public returns(string memory)
    {
        return tokenURI(tokenId);
    }

    //Now this is the transfer function which transfers the token from the admin address to the lead address
    function Transfertoken(address from,address to) public {

        //This function accepts two parameters
         uint _tokenId=_tokenIds.current();
         uint beforetoken=_tokenId-1;

         //Before transferring the tokens the first step is to approve the tokens to the to address
         approve(to,beforetoken);

         //Now once the approval is complete the next step is to transfer the NFT
         transferFrom(from,to,beforetoken);



        

    }
}