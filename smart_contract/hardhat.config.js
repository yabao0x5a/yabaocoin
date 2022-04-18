require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-mainnet.alchemyapi.io/v2/JwTcQkkAb-CmlVI9xZMwwcVekpvc1yiY',
      accounts: ['16d262444881152f2f7892d2dffb8c083a1c4ae0f0d50ce84ef15cc6103a9684'],
    },
  },
};