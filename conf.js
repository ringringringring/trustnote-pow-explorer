/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 6100;

exports.storage = 'sqlite';


exports.initial_witnesses = [	
	"JNA6YWLKFQG7PFF6F32KTXBUAHRAFSET",
    "4T7YVRUWMVAJIBSWCP35C7OGCX33SAYO",
    "A4BRUVOW2LSLH6LVQ3TWFOCAM6JPFWOK",
    "BHYNQIMH6KGLVQALJ5AM6EM7RTDDGF3P",
    "D55F4JL2R3S4UHX4UXVFGOWTZPZR2YXO",
    "JKATXQDYSE5TGRRZG6QUJS2GVYLCAPHM",
    "TLLGQTKOT7ZINCOSBJG64LKE3ZTD3EDK",
    "UK7TAQI27IV63N7Q6UB7BSE6OP2B25Z2",
	"ZW35QKXIKK47A7HW3YRIV6TU3DYDTIVR"
	// '72FZXZMFPESCMUHUPWTZJ2F57YV32JCI',
	// '2G6WV4QQVF75EPKSXTVRKRTZYSXNIWLU',
	// '4ZJ3HQTLYK72O4PLE3GA4ZYCYXLIFHXK',
	// '7RR5E6BRHE55FHE76HO6RT2E4ZP3CHYA',
	// 'CAGSFKGJDODHWFJF5LS7577TKVPLH7KG',
	// 'FX2B6E622RF4J4MM2OUWMGSOKJP7XTXB',
	// 'JN2N7SOMDKNSDGMVAW346BYTOSKZIIT4',
	// 'SAHCPBJAAOXRJ6KRSM3OGATIRSWIWOQA',
	// 'WL44BDM4QNCMAM5AS3ZB2GYTVDBWAS5Z'
];


/*'wss://trustnote.org/tg' */
exports.initial_peers = [
	//'ws://dev.mainchain.pow.trustnote.org:9191',
	'ws://150.109.39.137:9191'

	// 'wss://victor.trustnote.org/tn',
	// 'wss://eason.trustnote.org/tn',
	// 'wss://lymn.trustnote.org/tn',
	// 'wss://bob.trustnote.org/tn',
	// 'wss://curry.trustnote.org/tn',
	// 'wss://kake.trustnote.org/tn'
];

console.log('finished explorer conf');
