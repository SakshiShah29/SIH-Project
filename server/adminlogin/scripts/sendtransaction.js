const Web3 = require("web3");

//0x755E7A5F0332C0E5D81Af09665A971d20872117d This is the owner of the smart contract
// This is the private key for the owner of the smart contract -- 18680b898100d73f98cc881898c32e8be1773d925f3f22be8c63e58cd7bb2e10

//0xE27E8bE768b01070F4eb12523e8a52F8D682F1Fa This is the address from which the function is going to be called
//0c7fcfbf8330ec840cae0000ba1553f5bcd6070e51747c72c24412b5979fda8f- This is the private key

//This is the contract address
//0x4fC53Df9cc83393d96072D3188631A107142Cf49

//We are going to use the infura software for accessing the node of the ethereum network

const infuraUrl =
  "https://rinkeby.infura.io/v3/37749d3fc8de4f72bc82d3a104474d97";

//So this is creating an instance of the web3
const web3 = new Web3(infuraUrl);

var Accounts = require("web3-eth-accounts");

const AdminSchema = require("../../models/adminschema");

//For creating the instance of the smart contract we need two things
// the contract address and the abi of the smart contract
const contract = require("../build/contracts/Adminlogin.json");

//Now we will be able to to access the functions of the web3 library
async function send(_admin, privatekey) {
  const networkId = await web3.eth.net.getId();

  //This is the address of the smart contract
  // const contractaddress = await contract.networks[4].address;
  const contractaddress = "0x4fC53Df9cc83393d96072D3188631A107142Cf49";
  console.log(contractaddress);

  //Now we need the ABI of the smart contract
  const contractabi = contract.abi;

  //Now we need to create an instance of the smart contract
  const instance = await new web3.eth.Contract(contractabi, contractaddress);

  //Now the next step is to create a transaction object
  // const nonce = await web3.eth.getTransactionCount(contractaddress, "latest");

  //Now this is the transaction object
  const tx = {
    to: contractaddress,
    gas: 500000,
    maxPriorityFeePerGas: 1999999987,
    data: instance.methods.login(_admin).encodeABI(),
  };

  //Now once the transaction object is created we need to sign the transaction
  //For signing the transaction we need the private key of the account
  const signedtx = await web3.eth.accounts.signTransaction(tx, privatekey);
  let _hash;

  // console.log(signedtx);

  try {
    //Now we are sending the signed transaction
    const transactionReceipt = await web3.eth.sendSignedTransaction(
      signedtx.rawTransaction,
      function (err, hash) {
        if (!err) {
          console.log("The hash of your transaction is", hash);
          _hash = hash;
        } else {
          console.log("Something went wrong!", err);
        }
      }
    );

    console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);

    return _hash;
  } catch (err) {
    console.log(err);
    console.log("The transaction has been reverted back to the initial state");
    return false;
  }
}

async function createadmin(admin, owner, privatekey, university) {
  const networkId = await web3.eth.net.getId();

  //This is the address of the smart contract
  // const contractaddress = await contract.networks[4].address;
  const contractaddress = "0x4fC53Df9cc83393d96072D3188631A107142Cf49";
  console.log(contractaddress);

  //Now we need the ABI of the smart contract
  const contractabi = contract.abi;

  let _hash;

  //Now we need to create an instance of the smart contract
  const instance = await new web3.eth.Contract(contractabi, contractaddress);

  //Now the next step is to create a transaction object
  const nonce = await web3.eth.getTransactionCount(contractaddress, "latest");
  // const accountNonce =
  //   "0x" + (web3.eth.getTransactionCount(contractaddress) + 1).toString(16);

  //Now this is the transaction object
  const tx = {
    // from: owner,
    to: contractaddress,
    gas: 500000,
    maxPriorityFeePerGas: 1999999987,
    data: instance.methods.assignadmin(admin, university).encodeABI(),
  };

  //Now once the transaction object is created we need to sign the transaction
  //For signing the transaction we need the private key of the account
  const signedtx = await web3.eth.accounts.signTransaction(tx, privatekey);

  try {
    const transactionReceipt = await web3.eth.sendSignedTransaction(
      signedtx.rawTransaction,
      function (err, hash) {
        if (!err) {
          console.log("The hash of your transaction is", hash);
          _hash = hash;
        } else {
          console.log("Something went wrong!", err);
        }
      }
    );

    console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
    //This means that the transaction is successful and hence we store the data inside the adminlogin

    await AdminSchema.create(
      {
        admin: admin.toLowerCase(),
        university: university,
      },
      (err, data) => {
        if (err) {
          console.log(err);
          console.log(
            "Some error has occured while trying to upload the data to the database"
          );
        }

        if (data) {
          console.log("The data is added successfully");
        }
      }
    );
    console.log(tx.data);
    if (_hash) {
      return _hash;
    } else {
      return false;
    }
  } catch (err) {
    console.log("The transaction has been reverted back to the initial state");
    return false;
  }
  //Now we are sending the signed transaction
}

async function getalladmins(owner, privatekey) {
  const networkId = await web3.eth.net.getId();

  //This is the address of the smart contract
  // const contractaddress = await contract.networks[4].address;
  const contractaddress = "0x4fC53Df9cc83393d96072D3188631A107142Cf49";
  console.log(contractaddress);

  //Now we need the ABI of the smart contract
  const contractabi = contract.abi;

  let _hash;

  //Now we need to create an instance of the smart contract
  const instance = await new web3.eth.Contract(contractabi, contractaddress);

  //Now the next step is to create a transaction object
  const nonce = await web3.eth.getTransactionCount(contractaddress, "latest");
  // const accountNonce =
  //   "0x" + (web3.eth.getTransactionCount(contractaddress) + 1).toString(16);

  //Now this is the transaction object
  const tx = {
    // from: owner,
    to: contractaddress,
    gas: 500000,
    maxPriorityFeePerGas: 1999999987,
    data: instance.methods.get.returnalladmins().encodeABI(),
  };

  //Now once the transaction object is created we need to sign the transaction
  //For signing the transaction we need the private key of the account
  const signedtx = await web3.eth.accounts.signTransaction(tx, privatekey);

  try {
    const transactionReceipt = await web3.eth.sendSignedTransaction(
      signedtx.rawTransaction,
      function (err, hash) {
        if (!err) {
          console.log("The hash of your transaction is", hash);
          _hash = hash;
        } else {
          console.log("Something went wrong!", err);
        }
      }
    );

    console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
    console.log("This is the transaction data");
    if (_hash) {
      return _hash;
    } else {
      return false;
    }
  } catch (err) {
    console.log("The transaction has been reverted back to the initial state");
    return false;
  }
  //Now we are sending the signed transaction
}

//The master admin of the smart contract is :
//"0x755E7A5F0332C0E5D81Af09665A971d20872117d" and private key:18680b898100d73f98cc881898c32e8be1773d925f3f22be8c63e58cd7bb2e10

//These are the admins:
//0xE27E8bE768b01070F4eb12523e8a52F8D682F1Fa and this is its private key:0c7fcfbf8330ec840cae0000ba1553f5bcd6070e51747c72c24412b5979fda8f
//Also the university for this address is Chandubhai S. Patel Institute of Technology

//Now this is the second admin address that is assigned a university
//0x38f639f204015CC2964e5991E0d697055B9fb87E and its private key is: 2b566aca394d73f9c4b27ef20fa082ae07b78bc1f6648091b3742f174b8a2b0f
//The university assigned to this address is CHRIST CHURCH P.G. COLLEGE

//The second trial is:
//0x38f639f204015CC2964e5991E0d697055B9fb87E

// createadmin(
//   "0xE27E8bE768b01070F4eb12523e8a52F8D682F1Fa",
//   "0x755E7A5F0332C0E5D81Af09665A971d20872117d",
//   "18680b898100d73f98cc881898c32e8be1773d925f3f22be8c63e58cd7bb2e10",
//   "Chandubhai S. Patel Institute of Technology"
// );

// send(
//   "0xE27E8bE768b01070F4eb12523e8a52F8D682F1Fa",
//   "bcc4db0c13960b566fd13fc1dd4b11233db7050a30331d4c4a4c643bbfaa6c94"
// );

module.exports = { createadmin, send };
