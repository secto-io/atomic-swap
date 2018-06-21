# Atomic Cross Chain Trading
This repo contains utilities to manually perform cross-chain atomic swaps between erc20 currencies. Currently Qtum, Ethereum, and their erc20 based tokens are supported.

----

# What is atomic swap
Atomic swaps, or atomic cross-chain trading, is the exchange of one cryptocurrency to
another cryptocurrency, without the need to trust a third-party.
A relatively new piece of technology, atomic cross-chain trading is looking to revolutionize the way in which users transact with each other.
For example, if Alice owned one Qtum but wanted one XTOKEN instead, she would have to go through an exchange.
However, with atomic swaps, if Bob owned one XTOKEN but wanted one Qtum instead, then Bob and Alice could make a trade.
In order to prevent, for example, Alice accepting Bob’s one XTOKEN but then failing to send over her one Qtum, atomic swaps utilizes what is known as hash time-locked contracts (HTLCs).
Hash time-locked contracts or HTLCs are integral to the design of more advanced payment channels such as those used by the Lightning Network.

----


### Installation

Pre-requirements:

 - node v8.4.0 or later
 - npm 5.6.0 or later
 - qtum-0.14.10 or later

**Install ethereum testrpc**
```sh
$ npm install -g ethereumjs-testrpc
```
**Install the repo**
```ssh
$ git clone https://github.com/ordemri/atomic-swap-mp && cd atomic-swap-mp
```
**Run ethereum testrpc**
```ssh
$ testrpc --rpc
```

**Run Qtum testnet node**

```ssh
$ qtumd -testnet -rpcuser=RPCUSER -rpcpassword=RPCPASSWORD -rpcport=13889 -server -logevents
```
**Run the tests**
```ssh
$ truffle test test/atomic-swap.js
```

### TODOs

 - Add support for other blockchains
 - Write MORE Tests
 


