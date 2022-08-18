const Web3 = require("web3");
const Pendingproject = require("../../models/pendingproject");
const axios = require("axios");
//https://rinkeby.infura.io/v3/37749d3fc8de4f72bc82d3a104474d97

const infuraUrl =
  "wss://rinkeby.infura.io/ws/v3/40013e8122f34b3ea56d347c05228698";

//So this is creating an instance of the web3
const web3 = new Web3(infuraUrl);

const contract = require("../build/contracts/Projectupload.json");

const contractaddress = "0x0d3fF87fEE3a30016EDeC1B39072335C0d635F0e";
console.log(contractaddress);

//Now we need the ABI of the smart contract
const contractabi = contract.abi;

//Now we need to create an instance of the smart contract
const instance = new web3.eth.Contract(contractabi, contractaddress);
console.log("The instance of the smart contract is created");
console.log("This is the emitted event of the smart contract");
// instance.once("Uploaded", (error, event) => {
//   if (!error) console.log(event.returnValues);
// });

instance.events.Uploaded({}).on("data", (event) => {
  console.log(event);
  console.log(event.returnValues);
  console.log(typeof event.returnValues);
  console.log(event.returnValues["0"]);

  //Now as we have got the details such as the admin of the smart contract the student who has uploaded the project and the projectid
  //The next step is to add these values into the database so that it can be further sent to the admin showing all the pending projects
  let admin = event.returnValues["1"];
  let student = event.returnValues["0"];
  let projectId = event.returnValues["2"];
  let university = event.returnValues["3"];

  console.log("Now we are sending the data to the database");

  let url = "http://localhost:3001/api/pendingproject";
  let body = {
    admin: admin,
    student: student,
    projectId: projectId,
    university: university,
  };

  axios.post(url, body);

  console.log("The data is sent");
});
