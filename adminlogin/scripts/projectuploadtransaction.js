const Web3 = require("web3");

//https://rinkeby.infura.io/v3/37749d3fc8de4f72bc82d3a104474d97

const infuraUrl =
  "wss://rinkeby.infura.io/ws/v3/40013e8122f34b3ea56d347c05228698";

//So this is creating an instance of the web3
const web3 = new Web3(infuraUrl);

const contract = require("../build/contracts/Projectupload.json");

async function getemittedevents() {
  const contractaddress = "0xc5D19a22913e333cCD2f62b7Ce95B020B19Dd990";
  console.log(contractaddress);

  //Now we need the ABI of the smart contract
  const contractabi = contract.abi;

  //Now we need to create an instance of the smart contract
  const instance = await new web3.eth.Contract(contractabi, contractaddress);

  //.getPastEvents("ProjectUploaded");
  //fromBlock: 0
  let block = await web3.eth.getBlock("latest");
  console.log(block.number);
  let event = await instance.getPastEvents("Uploaded", {
    fromBlock: 0,
  });
  console.log("This is the emitted event");
  console.log(event);
}
async function triggeradmin(student, admin, projectid, university, privatekey) {
  const networkId = await web3.eth.net.getId();

  //This is the address of the smart contract
  // const contractaddress = await contract.networks[4].address;
  const contractaddress = "0x0d3fF87fEE3a30016EDeC1B39072335C0d635F0e";
  // console.log("This is the address of the smart contract");
  console.log(contractaddress);

  //Now we need the ABI of the smart contract
  const contractabi = contract.abi;
  // console.log("Till here there are no issues");

  //Now we need to create an instance of the smart contract
  const instance = await new web3.eth.Contract(contractabi, contractaddress);
  // console.log("The instance of the object is created");

  // console.log("We are printing the type of each data");
  // console.log(student, "Type of student ", typeof student);
  // console.log(admin, "type of admin", typeof admin);
  // console.log(
  //   projectid.toString(),
  //   "type of projectid",
  //   typeof projectid.toString()
  // );
  // console.log(university, "typeof university", university);
  // console.log("This is the private key", privatekey, typeof privatekey);
  //Now the next step is to create a transaction object
  // const nonce = await web3.eth.getTransactionCount(contractaddress, "latest");
  let data = await instance.methods
    .ProjectUploaded(student, admin, projectid.toString(), university)
    .encodeABI();

  console.log("Was the data object made");

  console.log(data);
  console.log("This is the method that is called");

  //Now this is the transaction object
  const tx = {
    to: contractaddress,
    gas: 500000,
    maxPriorityFeePerGas: 1999999987,
    data: data,
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

//This is the account address of the student
//0x6fC88f402E6e8AaC089366F95186dB80675f771d
//This is the private key of that account
//bcc4db0c13960b566fd13fc1dd4b11233db7050a30331d4c4a4c643bbfaa6c94

// triggeradmin(
//   "0x6fC88f402E6e8AaC089366F95186dB80675f771d",
//   "0xE27E8bE768b01070F4eb12523e8a52F8D682F1Fa",
//   "1",
//   "Chandubhai S. Patel Institute of Technology",
//   "bcc4db0c13960b566fd13fc1dd4b11233db7050a30331d4c4a4c643bbfaa6c94"
// );

// getemittedevents();

module.exports = { triggeradmin, getemittedevents };
