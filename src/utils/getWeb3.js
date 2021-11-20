import Web3 from 'web3'

const getWeb3 = async () => {
    console.log(window.web3);
    console.log(window.ethereum);

    let web3
    if (window.ethereum) {
        web3 = new Web3(window.ethereum)
        try {
            // Request account access if needed
            await window.ethereum.enable()
            // Acccounts now exposed
            const res = await web3.eth.getAccounts()
            web3.eth.defaultAccount = res[0]
            const res1 = await web3.eth.getBalance(web3.eth.defaultAccount)
            console.log(res1)
            // const token = web3.eth.Contract(abi)
            // const contract = new web3.eth.Contract(abi)
            // const instance = contract.at(web3.eth.defaultAccount)
            // console.log(instance)
        } catch (error) {
            console.log(error)
        }
    } else if (window.web3) {
        // Use Mist/MetaMask's provider.
        web3 = window.web3
        console.log('Injected web3 detected.')
    } else {
        const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
        web3 = new Web3(provider)
        console.log('No web3 instance injected, using Local web3.')
    }
    let result = {
        injectedWeb3: web3.eth.net.isListening(),
        web3() {
            return web3
        }
    }
    await new Promise((resolve, reject) => {
        result.web3().eth.net.getId((err, networkId) => {
            if (err) {
                reject(new Error('Unable to retrieve network ID'))
            } else {
                console.log('retrieve newworkId: ' + networkId)
                result = Object.assign({}, result, { networkId })
                resolve(result)
            }
        })
    })

    await new Promise((resolve, reject) => {
        result.web3().eth.getCoinbase((err, coinbase) => {
            if (err) {
                reject(new Error('Unable to retrieve coinbase'))
            } else {
                coinbase = result.web3().utils.toChecksumAddress(coinbase)
                console.log('retrieve coinbase: ' + coinbase)
                result = Object.assign({}, result, { coinbase })
                resolve(result)
            }
        })
    })
    return result
}

export default getWeb3
