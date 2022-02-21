function getNetworkConfig(network, accounts) {
    if(["bsc", "bsc-fork"].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x7b26A27af246b4E482f37eF24e9a3f83c3FC7f1C', // BSC GSafe Secure Admin
        }
    } else if (['bscTestnet', 'bscTestnet-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xE375D169F8f7bC18a544a6e5e546e63AD7511581',
        }
    } else if (['development'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x804962FAc9268A54dF121f129C4a21d7c0aD70b7',
        }
    } else if (['acent', 'acent-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xB8B9F315254EDcEeB13940185A78775a5259eCf3',
        }
    } else if (['acenttest', 'acenttest-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xB8B9F315254EDcEeB13940185A78775a5259eCf3',
        }
    } else if (['polygonTestnet', 'polygonTestnet-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xE375D169F8f7bC18a544a6e5e546e63AD7511581',
        }
    } else {
        throw new Error(`No config found for network ${network}.`)
    }
}

module.exports = { getNetworkConfig };
