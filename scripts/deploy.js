
async function main () {
    const [deployer] = await ethers.getSigners();

    const mytoken = await hre.ethers.getContractFactory("mytoken")
    const myTokenDeployed = await mytoken.deploy("MyToken", "M.T");

    await myTokenDeployed.deployed();

    console.log("Deployed Contract to:", myTokenDeployed.address);
    console.log("Deployer Contracts with the account:", deployer.address);
    console.log("Account Balance:", (await deployer.getBalance()).toString());
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})