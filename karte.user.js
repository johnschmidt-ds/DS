// ==/UserScript==
// ==UserScript==
// @name         W257 - HLVTC
// @version      1.0
// @description  draw on map
// @author       DS Monkey
// @match        https://de257.die-staemme.de/game.php?*village=*screen=map*
// @grant        none
// @downloadURL  https://github.com/johnschmidt-ds/DS/raw/refs/heads/main/karte.user.js
// @updateURL    https://github.com/johnschmidt-ds/DS/raw/refs/heads/main/karte.user.js
// ==/UserScript==

var win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
win.$.ajaxSetup({ cache: true });

$.getScript("https://shinko-to-kuma.com/scripts/mapSdk.js").done(function() {
MapSdk.texts.push({text:"FFA",x:632,y:427,font:"47px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FFA",x:699,y:381,font:"47px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"HLVTC",x:684,y:438,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"TGV",x:677,y:364,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:677,y:366,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Ohmykotito",x:677,y:368,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Haank",x:696,y:487,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:696,y:489,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Sunraku",x:696,y:491,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:696,y:493,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Conjack",x:696,y:495,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Stevil000",x:651,y:509,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:651,y:511,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FB11",x:651,y:513,font:"38px Arial",miniFont: "10px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.lines.push({x1: 644,y1: 500,x2: 659,y2: 484,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 380,x2: 600,y2: 475,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 644,y1: 500,x2: 644,y2: 590,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 500,x2: 659,y2: 590,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 669,y1: 300,x2: 669,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 669,y1: 400,x2: 766,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 410,x2: 669,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 484,x2: 659,y2: 475,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 475,x2: 770,y2: 475,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 684,y1: 400,x2: 684,y2: 312,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 500,x2: 769,y2: 500,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 674,y1: 475,x2: 674,y2: 500,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 444,x2: 647,y2: 444,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 475,x2: 659,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 450,x2: 647,y2: 450,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 647,y1: 450,x2: 647,y2: 444,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 1}},drawOnMini: true,drawOnMap: true,});
MapSdk.mapOverlay.reload();});