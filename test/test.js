const { expect } = require("chai");


describe("mytoken", function() {
    
    it("should return correct name", async function(){
        const mytoken = await hre.ethers.getContractFactory("mytoken");
        const mytokenDeployment = await mytoken.deploy("name", "symbol");

        await mytokenDeployment.deployed();
        expect(await mytokenDeployment.name()).to.equal("name");
    });

    it("should return correct symbol", async function(){
        const mytoken = await hre.ethers.getContractFactory("mytoken");
        const mytokenDeployment = await mytoken.deploy("name", "symbol");

        await mytokenDeployment.deployed();
        expect(await mytokenDeployment.symbol()).to.equal("symbol");
    });


})