export default {
    totalSupply(contract) {
        return contract.methods.totalSupply().call()
    },
    punksRemainingToAssign(contract) {
        return contract.methods.punksRemainingToAssign().call()
    },
    punksOfferedForSale(contract, data) {
        return contract.methods.punksOfferedForSale(data).call()
    },
    allPunksAssigned(contract) {
        return contract.methods.allPunksAssigned().call()
    },
    symbol(contract) {
        return contract.methods.symbol().call()
    }
}
