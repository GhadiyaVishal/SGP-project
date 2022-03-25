// https://eth-ropsten.alchemyapi.io/v2/38KtC5aodZVw_-S5zSAuRbHTWQnJ3gNQ

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/38KtC5aodZVw_-S5zSAuRbHTWQnJ3gNQ',
      accounts: ['564f2314aeb0eaab6d14e7aef4c32eba7258ff427e2011644912d24baa0e8ff0'],
    },
  },
};