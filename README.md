----

# Matchpool generic atomic cross chain trading
This repo contains utilities to manually perform cross-chain atomic swaps between Guppy and other currencies. Currently Qtum, Ethereum, and their erc20 based tokens are supported.

----

# What is Atomic swap
Atomic swaps, or atomic cross-chain trading, is the exchange of one cryptocurrency to
another cryptocurrency, without the need to trust a third-party.
A relatively new piece of technology, atomic cross-chain trading is looking to revolutionize the way in which users transact with each other.
For example, if Alice owned one Qtum but wanted one Guppy instead, she would have to go through an exchange.
However, with atomic swaps, if Bob owned one Guppy but wanted one Qtum instead, then Bob and Alice could make a trade.
In order to prevent, for example, Alice accepting Bob’s one Guppy but then failing to send over her one Qtum, atomic swaps utilizes what is known as hash time-locked contracts (HTLCs).

----

### First main-net GUP-Qtum atomic swap

| Description | Transaction |
| ------ | ------ |
| Alice creates the Qtum contract | [Qtum Block explorer](https://explorer.qtum.org/tx/696160b8ee46627a75b9532fdbf8fbc36486043bc30a7f564439b23a3dfc63a0)|
| Bob creates the Gup contract  | [Ethereum block explorer](https://etherscan.io/tx/0x2468ed970396cd1c52e1a56e94cb7d3e77967829205505d3f0e72855471d4ebe) |
| A redeems B's contract | [Ethereum block explorer](https://etherscan.io/tx/0x45b57f141c34859e04f7852d86e39a1dfd7115d5a741df9cb94d22368e6bed32)|
| B redeems A's contract | [Qtum block explorer](https://explorer.qtum.org/tx/ebcfcc97bbbd344ad8d3de38c9935db349c99ab91e769db1b59464d10c210268) |

----

### Installation

Pre-requirements:

 - node v8.4.0 or later
 - npm 5.6.0 or later
 - qtum-0.14.10

**Install ethereum testrpc**
```sh
$ npm install -g ethereumjs-testrpc
```
**Install the repo**
```ssh
$ git clone https://github.com/matchpool/genericswap && cd genericswap
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


Contributions and issues are welcome.
License
----


