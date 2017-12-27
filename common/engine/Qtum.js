/**
 * Qtum.js
 * Created by ordemri
 * on 12/25/17
 */

const {Contract, QtumRPC} = require("qtumjs");

module.exports = class Qtum {
    constructor(config) {
        this.rpc = new QtumRPC(config.provider);
        this.contract = new Contract(this.rpc, config);
    }

    async execute(func, args, props) {
        props = props || {gasLimit: 6000000};
        let receipt = await this.contract.send(func, args, props);
        console.log('receipt', receipt)
        return receipt;
    }

    async executeAndWait(func, args, props) {
        props = props || {gasLimit: 6000000};
        const receipt = this.execute(func, args, props)
        var confirmed = await receipt.confirm(1);
        console.log('confirmed', confirmed)
        return confirmed;
    }

    async callContarct(func, args) {
        return await this.contract.call(func, args);
    }

    async rpcCall(func, args) {
        return await this.rpc.rawCall(func, args);
    }


};
