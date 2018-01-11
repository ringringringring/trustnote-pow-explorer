/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 6000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
	'4MOQ4BKKIYLPIW2EBIPPYKAVKZKKAGUU',
	'5EOIHMAKADLGJPA3V7I6WFPP25UJGVFO',
	'73ZYEJQUAONT6CM43JPGVMOIWDSSTOWU',
	'ABV25PLKEIP7UPJGW36N5KEVZITOJP62',
	'BEB2GIH7ZFPTRZULYVTSDCRA4SOUDZE7',
	'FEBQADJX3YJBMYG7M3762REGC3LX7IGY',
	'FIFZLR4ZBCE7AWUH4CTDFHFZH7HMQ3WC',
	'HSK4ZFD2XJ3OPGVIMEOPH7HI5OV6NQHY',
	'L7YICPOR2U4QSMLPU7BXYWURKBFT2NB6',
	'PDWOVHJUS3ISA6EHIINUSUIJFNR3LY25',
	'TOLHUGF72FZR2H44ZLA6LVKFKFXGPIIE',
	'YURUGBTFGLFXU4Y2PKPYYLPZKQSRQ7PL'
];


/*'wss://trustnote.org/tg' */
exports.initial_peers = [
	'wss://jeff.trustnote.org/tn',
	'wss://snow.trustnote.org/tn',
	'wss://horsen.trustnote.org/tn',
	'wss://claire.trustnote.org/tn',
	'wss://patric.trustnote.org/tn',
	'wss://sure.trustnote.org/tn'
];

console.log('finished explorer conf');
