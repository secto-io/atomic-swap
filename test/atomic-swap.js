/**
 * atomic-swap
 * Created by ordemri
 * on 12/25/17
 */

const crypto = require('crypto');
const sha256 = require('sha256');
var Qtum = require('../common/engine/Qtum');
var config = require('../config')


var GupContract = artifacts.require("./GUP.sol");
var GenericSwapContract = artifacts.require("./GenericSwap.sol");


var GUP;
var GenericSwap;

function newSecret() {
    let secret = crypto.randomBytes(32).toString('hex');
    let hashedSecret = '0x' + sha256(secret);
    let pair = {secret, hashedSecret};
    return pair;
}

contract('Setup', function (accounts) {
    var qtum = new Qtum(config.qtum);

    var secret = newSecret();

    // Alice = contract creator
    var qAddresses = {
        alice: {
            hexAddress: '0x3f6b652a4c2d0d7671e0139a4d652f7925da2754',
            address: 'qPLiP4gcMcU6BawyaomDz3KnvW77gEGgyV'
        }, bob: {
            hexAddress: '0x79d6cb0b6b2de890a989fa08de3862e0bf122228',
            address: 'qUfcELD6s9edVnb4vzNRvop429UcJBLfqL'
        }
    }

    describe('Adding new currency to Qtum atomic swap contract', function () {
        it("should add QTUM to the contract", function (done) {
            // assuming the contract is already deployed and confirmed on Qtum network
            var tx = qtum.execute('addCurrency', ['QTUM', 'QTUM', false, '0x4a5d09db7dbbd117163e0c27a99a26bc3016a659'], {
                senderAddress: qAddresses.alice.address,
                gasLimit: 10000000
            });
            tx.then(v => {
                assert.ok(v.txid);
                done()
            })

        });
    });


    describe('Deploy GUP token contract', function () {
        it("should deploy GUP contract", function (done) {
            GupContract.new({
                from: accounts[1]
            }).then(function (_genericSwap) {
                assert.ok(_genericSwap.address);
                GUP = _genericSwap;
                console.log('GUP Token contract created at address', GUP.address);
                done();
            });
        });
    });

    describe('Deploy GenericSwap contract', function () {
        it("should deploy GenericSwap contract", function (done) {
            GenericSwapContract.new({
                from: accounts[0]
            }).then(function (_genericSwap) {
                assert.ok(_genericSwap.address);
                GenericSwap = _genericSwap;
                console.log('GenericSwap created at address', GenericSwap.address);
                done();
            });
        });
    });


    describe('Preparing Ethereum Atomic Swap contract', function () {
        it("should add ETH to the contract", function (done) {
            GenericSwap.addCurrency('Ethereum', 'ETH', false, '0x4a5d09db7dbbd117163e0c27a99a26bc3016a659',
                {from: accounts[0]}).then(function (result) {
                assert.ok(result);
                done();
            })
        });

        it("should add GUP to the GenericSwap contract", function (done) {
            GenericSwap.addCurrency('Guppy', 'GUP', false, GUP.address,
                {from: accounts[0]}).then(function (result) {
                assert.ok(result);
                done();
            })
        });
    });

    describe('QTUM <=> GUP rate-1:1', function () {

        before('Should send the trading party trade to QTUM', function (done) {
            var tx = qtum.execute('publish', ['QTUM', 0, secret.hashedSecret,
                qAddresses.bob.hexAddress, 120 * 60 * 1000], {
                senderAddress: qAddresses.alice.address,
                gasLimit: 10000000,
                amount: 1
            });
            tx.then(v => {
                assert.ok(v);
                done()
            })

        })


        it('Should send the counter party trade to Ethereum', function (done) {
            GenericSwap.publish('GUP', 1000, secret.hashedSecret, accounts[0], 60 * 60 * 1000,
                {from: accounts[1]}).then(v => {
                assert.ok(v);
                done();
            })
        })


        it('Should claim GUP funds ', function (done) {
            GenericSwap.claim(secret.secret, {from: accounts[0]}).then(v => {
                assert.ok(v);
                done();
            })

        })

        it('Should claim QTUM funds ', function (done) {
            var tx = qtum.execute('claim', [secret.secret], {
                senderAddress: qAddresses.bob.address,
                gasLimit: 10000000
            });
            tx.then(v => {
                assert.ok(v);
                done()
            })

        })


    })


});

