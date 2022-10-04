const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory(`MyEpicGame`);

    const gameContract = await gameContractFactory.deploy(
        ["Enki", "Enlil", "Anu"],    // Names
        ["https://i.ibb.co/r5X1JR9/enki.jpg", //Images
        "https://i.ibb.co/NKfw7JS/enlil.jpg",
        "https://i.ibb.co/3sKSmqV/anu.jpg"],
        [100, 200, 300], // HP Values
        [100, 50, 25], // Attack damage values
        "Nergal",  // Boss name
        "https://i.ibb.co/w0B7LKD/boss.jpg",
        10000, // Boss hp
        50 // Boss attack damage
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();