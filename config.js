/**
 * config
 * Created by ordemri
 * on 12/25/17
 */

var config = {
    qtum: {
        provider: 'http://or:demri@localhost:13889',
        address: '35fb4e772a940fdde54da38e63ee89f054543663',
        abi: [{
            "constant": false,
            "inputs": [{"name": "ccyName", "type": "string"}, {
                "name": "qty",
                "type": "uint256"
            }, {"name": "hashedPassword", "type": "bytes32"}, {"name": "cp", "type": "address"}, {
                "name": "exp",
                "type": "uint256"
            }],
            "name": "publish",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "name", "type": "string"}, {"name": "symbol", "type": "string"}, {
                "name": "isToken",
                "type": "bool"
            }, {"name": "tAddress", "type": "address"}],
            "name": "addCurrency",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "hashedPassword", "type": "bytes32"}],
            "name": "refund",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "bytes32"}],
            "name": "txs",
            "outputs": [{"name": "tradingParty", "type": "address"}, {
                "name": "counterParty",
                "type": "address"
            }, {"name": "ccy", "type": "string"}, {"name": "qty", "type": "uint256"}, {
                "name": "expirationDate",
                "type": "uint256"
            }, {"name": "initDate", "type": "uint256"}, {"name": "exist", "type": "bool"}, {
                "name": "done",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "secret", "type": "string"}],
            "name": "claim",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": false, "name": "tradingParty", "type": "address"}, {
                "indexed": false,
                "name": "counterParty",
                "type": "address"
            }, {"indexed": false, "name": "ccy", "type": "string"}, {
                "indexed": false,
                "name": "qty",
                "type": "uint256"
            }, {"indexed": false, "name": "hashedPassword", "type": "bytes32"}, {
                "indexed": false,
                "name": "expirationDate",
                "type": "uint256"
            }],
            "name": "Initiated",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": false, "name": "counterParty", "type": "address"}, {
                "indexed": false,
                "name": "ccy",
                "type": "string"
            }, {"indexed": false, "name": "qty", "type": "uint256"}, {
                "indexed": false,
                "name": "secret",
                "type": "string"
            }],
            "name": "Claimed",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": false, "name": "tradingParty", "type": "address"}, {
                "indexed": false,
                "name": "ccy",
                "type": "string"
            }, {"indexed": false, "name": "qty", "type": "uint256"}, {
                "indexed": false,
                "name": "hashedPassword",
                "type": "bytes32"
            }],
            "name": "Refunded",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": false, "name": "symbol", "type": "string"}, {
                "indexed": false,
                "name": "name",
                "type": "string"
            }, {"indexed": false, "name": "tokenAddress", "type": "address"}],
            "name": "CurrencyAdded",
            "type": "event"
        }]
    }
};


module.exports = config;
