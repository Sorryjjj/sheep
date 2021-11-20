import Web3 from 'web3'
// import { address, ABI } from './constant/ecourse_abi'
import { abi } from '../common/abi'
import constant from '../common/constant.js'
// const ethers = require('ethers');
// import { store } from '../store/'
const getContract = () => {
    return new Promise(function (resolve, reject) {
        // const provider = ethers.getDefaultProvider('43114')
        // const defaultProvider = ethers.getDefaultProvider('Avalanche');
        // const etherscanProvider = new ethers.providers.EtherscanProvider('Moonriver Kusama');
        // const web3 = new Web3(etherscanProvider)
        const web3 = new Web3(window.web3.currentProvider)
        const contract = new web3.eth.Contract(abi, constant.contractAddress)// 新的api
        if (!contract) {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('no contract instance build')
        }
        // const provider = ethers.getDefaultProvider();
        // const contract = new ethers.Contract(constant.contractAddress, abi, provider);
        resolve(contract)
    })
}
export default getContract
