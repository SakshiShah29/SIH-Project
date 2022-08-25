const express = require("express");
const cors = require("cors");

const { mintnft } = require("../adminlogin/scripts/mint_NFT");

const nftrouter = new express();

nftrouter.use(cors());
nftrouter.use(express.json());

nftrouter.post("/", async (req, res) => {
  let { adminaddress, adminprivatekey, leadaddress, tokenURI } = req.body;
  console.log(
    "This is the data that was passed to the backend from the frontend for the NFTs"
  );
  console.log(adminaddress);
  console.log(adminprivatekey);
  console.log(leadaddress);
  console.log(tokenURI);

  //Now after getting all the data from the frontend the next step is to call the function for minting the tokens
  //and sending these minted tokens to the lead address

  await mintnft(tokenURI, adminaddress, adminprivatekey, leadaddress);

  res.json({
    status: "Ok",
  });
});

module.exports = nftrouter;
