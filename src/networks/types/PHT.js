import tokens from '@/tokens/tokens-poa.json';
import contracts from '@/contracts/contract-abi-poa.json';
import poa from '@/assets/images/networks/poa.svg';

export default {
  name: 'PHT',
  name_long: 'Lightstreams',
  homePage: 'https://lightstreams.network/',
  blockExplorerTX: 'https://explorer.sirius.lightstreams.io/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer.sirius.lightstreams.io/addr/[[address]]',
  chainID: 162,
  tokens: tokens,
  contracts: contracts,
  icon: poa,
  currencyName: 'PHT'
};
