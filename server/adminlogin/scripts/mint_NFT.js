//Firstly as we need the alchemy url as well as the wallet public and private keys
// require("dotenv").config();

//Now we also need the alchemy web3 library so here we are importing this
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const { ethers } = require("ethers");

const web3 = createAlchemyWeb3(
  "https://eth-rinkeby.alchemyapi.io/v2/IT4KAWDrf4VmbkrxRAcCgoMdwnun12vI"
);

//Now this is the deployed smart contract
const contract = require("../build/contracts/NFT.json");

//Now this is creating the instance of the smart contract
//"0x0B45647791745fd62a492600428AFc406B2BA0b2";
const contractaddress = "0x059dEC2a9E4af2D1f0e6b0f6C0C28A4e201A5546";
const contractAbi = contract.abi;

const instance = new web3.eth.Contract(contractAbi, contractaddress);

//Now this is the minting function which will be called
async function minting(tokenUri, adminaddress, adminprivatekey, leadaddress) {
  //This is the nonce
  //Nonce is the count of the amount of transactions that are made by the address
  //Nonce is useful for security reasons as it prevents replay attacks
  // const nonce = await web3.eth.getTransactionCount(
  //   process.env.METAMASK_PUBLIC_KEY,
  //   "latest"
  // );

  //Now this is the transaction object
  const tx = {
    from: adminaddress,
    to: contractaddress,
    gas: 500000,
    maxPriorityFeePerGas: 1999999987,
    data: instance.methods.mintingtoken(adminaddress, tokenUri).encodeABI(),
  };

  //Now once the transaction object is created we need to sign the transaction
  //For signing the transaction we need the private key of the account
  const signedtx = await web3.eth.accounts.signTransaction(
    tx,
    // "0c7fcfbf8330ec840cae0000ba1553f5bcd6070e51747c72c24412b5979fda8f"
    adminprivatekey
  );

  //Now we are sending the signed transaction
  const transactionReceipt = await web3.eth.sendSignedTransaction(
    signedtx.rawTransaction,
    function (err, hash) {
      if (!err) {
        console.log("The hash of your transaction is", hash);
      } else {
        console.log("Something went wrong!", err);
      }
    }
  );

  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
  console.log("Successfully minted !");
  console.log("Now can transfer the NFT");

  //Now once the nft has been minted the next step is to transfer the NFT from the admin address to the lead address
  const tx2 = {
    from: adminaddress,
    to: contractaddress,
    gas: 500000,
    maxPriorityFeePerGas: 1999999987,
    data: instance.methods.Transfertoken(adminaddress, leadaddress).encodeABI(),
  };

  const signedtx2 = await web3.eth.accounts.signTransaction(
    tx2,
    // "0c7fcfbf8330ec840cae0000ba1553f5bcd6070e51747c72c24412b5979fda8f"
    adminprivatekey
  );

  //Now we are sending the signed transaction
  const transactionReceipt2 = await web3.eth.sendSignedTransaction(
    signedtx2.rawTransaction,
    function (err, hash) {
      if (!err) {
        console.log("The hash of your transaction is", hash);
      } else {
        console.log("Something went wrong!", err);
      }
    }
  );

  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
  console.log("Hence the NFT is now transferred to the lead addresss");
}

async function mintnft(adminaddress, adminprivatekey, leadaddress) {
  minting(
    "https://gateway.pinata.cloud/ipfs/QmWcwWiGjHW8kXqBw2X7JeECTyNMUF5L6rLR3ypPePVfM1",
    adminaddress,
    adminprivatekey,
    leadaddress
  );
}

mintnft(
  "0xE27E8bE768b01070F4eb12523e8a52F8D682F1Fa",
  "0c7fcfbf8330ec840cae0000ba1553f5bcd6070e51747c72c24412b5979fda8f",
  "0x6fC88f402E6e8AaC089366F95186dB80675f771d"
);

module.exports = { mintnft };
