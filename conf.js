/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 6000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
	'2TLBQ7GXXJ7X5LSVRFOBMAOAE4O4VOJL',
	'75NAVD6SVDCPMEMYNP2FMC33TANIV4ZJ',
	'7GN67TQ2PGPBTILUCZE346EFNQ6WXPUS',
	'7RYDFF2NUYQINGUV3XI4RKGU3BGPY7U7',
	'CXYNENGG4EMYOFIPHNW6TWYGM4JFI75B',
	'GSMLUFKHTJ23ZFOXYSI2ZZMVOXE3WPV4',
	'IABLIBB4PLSESJMVP6C7VMHV76MMEUVX',
	'IG7SW537TCA5CYHYMPN35HLX5AEDQKOG',
	'NUV3NTRIJDXMPY4U4H4I5FDM3WIXCB3E',
	'WWL2J5HS7R24ZEJQFC5VR6SNKNLS3TDA',
	'YNNSUXJ3EYL7CEYTNIKAELVTSX757QH5',
	'Z6AJ4AH5ETJPNASIOWIWX25DS26EGD3G'
];


/*'wss://trustnote.org/tg' */
exports.initial_peers = [
	'ws://Galilei.trustnote.org/tn',
	'ws://Newton.trustnote.org/tn',
	'ws://Einstein.trustnote.org/tn'
];

console.log('finished explorer conf');
