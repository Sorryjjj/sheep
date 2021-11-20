import { config } from './config'
import ethers from 'ethers'

const Web3 = require('web3');

export const getProvider = () => {
    console.log(config);
    // const provider = new Web3.providers.WebsocketProvider(config.eth.infura)
    const provider = ethers.getDefaultProvider('Avalanche')
    provider.on('connect', () => console.log('WS Connected'))
    provider.on('error', e => {
        console.error('WS Error', e)
        web3.setProvider(getProvider())
    })
    provider.on('end', e => {
        console.error('WS End', e)
        web3.setProvider(getProvider())
    })

    return provider
}

const web3 = new Web3(getProvider())
