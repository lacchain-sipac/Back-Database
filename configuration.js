//mongo mongodb+srv://user-honduras:Rktj11KVEzU1Xrb5@clusterhonduras-qob3j.gcp.mongodb.net/hondurasdb configuration.js


var configuration = {
    'blockchainServer': 'http://eth-lacchain.kaytrust.id',
    'addressEthereumBackend': '0x38ff21128ff8796cb1866c29d7df2310f475e957',
    'contractAddressIdentityManager': '0xb79e51f09d216d6b70278464e5dedd6164d0793b',
    'contractAddressProxyFirstAdministrator': '0x8b42de1a6e497613d911b03e9826a9d90c02c89a',
    'contractAddressRoles': '0x612fbf4660416c50b284d83082860f8e325ff005',
    'networkId': '0x9e551',
    'contractAddressStepManager': '0x9cec5351d2c256fcaef5bfdc7259f48df86c3349',
    'didBackend': 'did:ev:cwML6YqL1r4T4vkV4z5xJHe5uYBqVswvqU3qk',
    'contractAddressFlow': '0xe51e106a62fd30dbeed4ef0041a021819872bb32',
    'urlLogin': 'https://honduras-frontend.kaytrust.id',
    'attempsQueue': 10
}

db.configuration.remove({});
db.configuration.insert(configuration);