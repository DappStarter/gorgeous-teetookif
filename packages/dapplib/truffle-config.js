require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remind million grace pet swift style'; 
let testAccounts = [
"0x86d4b9a3bc3ba1d8a4a9227b7873c3eca16f44da60e379b18a4646bde56a1039",
"0x670eab91964c708e3b3abcd182f88717e8f9c4baa10d67f06d04664800f23d0c",
"0x13e88b1f6669db7187a212f25e57419e516aeac903e687aa234173b81b84874a",
"0x480def5bc15bc39421d24b4e89e427440543d26113d6ac4a7c5f3a0bc042f42d",
"0xad4e936bf57acb9db1d7de65cdd725551da447294b12c415c8c7b22f3202092e",
"0xcd630d7c3d0a5f41efd2fcc18b863affde0f3157ffdad402d4f648347f05c837",
"0x731d1f8f8aaebcb1b98b65732a6a3c1d03f82fe4de2f44e57f6e783edc0a45de",
"0xe67ae303950e2144a249d6a33ecbda27e2ee0fb0968ccf2bbab12c53c6a3b5aa",
"0xeb79c854783fcb590a376a9f7e9a51e290d6262d3922d77adfc9b813970bf0cf",
"0x6fe60f754326b3ffb32b90debf8191edb7f91656ba3facdf2ecfdf1173b63c90"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
