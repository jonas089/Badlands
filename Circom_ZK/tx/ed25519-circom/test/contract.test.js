/* eslint-disable */
const { expect } = require("chai");
const hre = require("hardhat");
const axios = require("axios");

describe("Verifier Contract", () => {
  // it("should query ", async () => {
  //   const options = {

  //     method: 'POST',

  //     url: 'http://3.23.60.176:4000/prove',

  //     headers: {Accept: 'application/json', 'Content-Type': 'application/json'},

  //     data: {

  //       msg: 'af82',

  //       pubkeys: [

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025',

  //         'fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025'

  //       ],

  //       sigs: [

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a',

  //         '6291d657deec24024827e69c3abe01a30ce548a284743a445e3680d7db5ac3ac18ff9b538d16f290ae67f760984dc6594a7c15e9716ed28dc027beceea1ec40a'

  //       ]

  //     }

  //   };


  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //     expect(response.data !== undefined);
  //     expect (response.data.id !== undefined);
  //   }).catch(function (error) {
  //     console.error(error);
  //     expect(false);
  //   });
  // })
  
  it("should be to able to query calldata for returned id", async() => {
    const id = '1de8eec0-5b8e-4a32-a5dc-c7a5fae5bd16';
    const options = {
      method: 'GET',
      url: `http://3.23.60.176:4000/proof/${id}`
    }

    const response = await axios.request(options);
    console.log(response.data);
    expect(response.data !== undefined);
    expect (response.data.calldata !== undefined);
  })

  it("should be able to verify valid proof", async() => {
    const a = ["0x2c152847192bbc68704d841847be59f26151e69b5174746b1db7b8d8df2f7640", "0x2a488d51057b3f023b053da4ef12e3c7160854dd869275c0dbf0a15cf63fe471"]
    const b = [["0x06a91e09be841bf650e1c53f73bc3a2ca8a90647f8a13b0861e628bc7d59ed0c", 
    "0x27205b95af56b9cccbf72ba787cfca8c29a0dce8642ac49b02fde1a803900e0e"],
    ["0x2f0a4da520d1cb7361d9f0d985f987dffdd4b566cb418301d43276fc167cef8c", 
    "0x03d40a96f725426acd5ec947326ad4c57d4ce39ac050468bbfc562efcdf1474f"]];
    const c = ["0x09075741e96055c2054125e05241252ac429df42ff0055986d21f37baf636a9e", 
    "0x17c6824af4b4e33ffef0f7c69057c19f4914487629b8bd706b133bc930e6b88b"];
    const message = ["0x00000000000000000000000000000000dcc2a502969404e3aa5e5e85fde51b8b","0x000000000000000000000000000000003e3e3eaad3e44704d694d3e61f6bbaa8","0x0000000000000000000000000000000000000000000000000003ffffffffffff","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"];
    

    const Verifier = await hre.ethers.getContractFactory("Verifier");
    const verifier = await Verifier.deploy();
    await verifier.deployed();

    expect(await verifier.verifyProof(a, b, c, message)).to.equal(true);
  })

  it("should not be able to refute invalid proof", async() => {

    const a = ["0x2c152847192bbc68704d841847be59f26151e69b5174746b1db7b8d8df2f7640", "0x2a488d51057b3f023b053da4ef12e3c7160854dd869275c0dbf0a15cf63fe471"]
    const b = [["0x06a91e09be841bf650e1c53f73bc3a2ca8a90647f8a13b0861e628bc7d59ed0c", 
    "0x27205b95af56b9cccbf72ba787cfca8c29a0dce8642ac49b02fde1a803900e0e"],
    ["0x2f0a4da520d1cb7361d9f0d985f987dffdd4b566cb418301d43276fc167cef8c", 
    "0x03d40a96f725426acd5ec947326ad4c57d4ce39ac050468bbfc562efcdf1474f"]];
    const c = ["0x09075741e96055c2054125e05241252ac429df42ff0055986d21f37baf636a9e", 
    "0x17c6824af4b4e33ffef0f7c69057c19f4914487629b8bd706b133bc930e6b88b"];

    // Changed the first signal of message slightly (index 3)
    const message = ["0x00000000000000000000000000000000dcc2a502969404e3aa5e5e85fde51b8b","0x000000000000000000000000000000003e3e3eaad3e44704d694d3e61f6bbaa8","0x0000000000000000000000000000000000000000000000000003ffffffffffff","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"];

    const Verifier = await hre.ethers.getContractFactory("Verifier");
    const verifier = await Verifier.deploy();
    await verifier.deployed();

    expect(await verifier.verifyProof(a, b, c, message)).to.equal(false);
  })
});