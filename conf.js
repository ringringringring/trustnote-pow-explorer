/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 8000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
        '72FZXZMFPESCMUHUPWTZJ2F57YV32JCI',
        '2G6WV4QQVF75EPKSXTVRKRTZYSXNIWLU',
        '4ZJ3HQTLYK72O4PLE3GA4ZYCYXLIFHXK',
        '7RR5E6BRHE55FHE76HO6RT2E4ZP3CHYA',
        'CAGSFKGJDODHWFJF5LS7577TKVPLH7KG',
        'FX2B6E622RF4J4MM2OUWMGSOKJP7XTXB',
        'JN2N7SOMDKNSDGMVAW346BYTOSKZIIT4',
        'SAHCPBJAAOXRJ6KRSM3OGATIRSWIWOQA',
        'WL44BDM4QNCMAM5AS3ZB2GYTVDBWAS5Z'
];


/*'wss://trustnote.org/tg' */
exports.initial_peers = [
        'ws://test.mainchain.pow.trustnote.org:9191',

        // 'wss://victor.trustnote.org/tn',
        // 'wss://eason.trustnote.org/tn',
        // 'wss://lymn.trustnote.org/tn',
        // 'wss://bob.trustnote.org/tn',
        // 'wss://curry.trustnote.org/tn',
        // 'wss://kake.trustnote.org/tn'
];

console.log('finished explorer conf');
