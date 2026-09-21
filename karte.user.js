// ==UserScript==
// @name         W257 - HLVTC
// @version      1.17
// @description  draw on map
// @author       Shinko to Kuma, suilenroc
// @match        https://de257.die-staemme.de/game.php?*village=*screen=map*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Facetrain/DS257-VuV-Chaos/main/karte.user.js
// @updateURL    https://raw.githubusercontent.com/Facetrain/DS257-VuV-Chaos/main/karte.user.js
// ==/UserScript==
$.getScript("https://shinko-to-kuma.com/scripts/mapSdk.js").done(function() {

MapSdk.lines.push({x1: 600,y1: 410,x2: 399,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 410,x2: 399,y2: 390,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 390,x2: 399,y2: 380,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 415,y1: 469,x2: 415,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 384,y1: 479,x2: 384,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 370,y1: 485,x2: 370,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 440,y1: 410,x2: 440,y2: 380,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 440,y1: 380,x2: 405,y2: 380,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 440,y1: 380,x2: 600,y2: 380,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 405,y1: 380,x2: 405,y2: 356,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 405,y1: 356,x2: 399,y2: 349,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 380,x2: 379,y2: 359,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 475,x2: 399,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 584,y1: 474,x2: 584,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 564,y1: 490,x2: 584,y2: 474,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 584,y1: 490,x2: 600,y2: 475,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 644,y1: 500,x2: 659,y2: 484,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 400,x2: 620,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 629,y1: 400,x2: 635,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 629,y1: 400,x2: 615,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 649,y1: 400,x2: 638,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 630,y1: 484,x2: 630,y2: 444,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 645,y1: 484,x2: 645,y2: 444,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 554,y1: 410,x2: 554,y2: 479,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 554,y1: 479,x2: 545,y2: 487,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 380,x2: 600,y2: 475,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 590,y1: 380,x2: 590,y2: 365,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 590,y1: 365,x2: 600,y2: 365,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 365,x2: 600,y2: 265,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 610,y1: 400,x2: 610,y2: 266,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 620,y1: 400,x2: 620,y2: 268,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 635,y1: 400,x2: 635,y2: 281,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 649,y1: 400,x2: 649,y2: 289,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 490,y1: 380,x2: 490,y2: 239,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 349,x2: 399,y2: 250,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 379,y1: 359,x2: 379,y2: 262,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 415,y1: 469,x2: 434,y2: 519,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 475,x2: 419,y2: 534,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 384,y1: 479,x2: 404,y2: 529,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 370,y1: 485,x2: 390,y2: 530,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 450,y1: 520,x2: 450,y2: 586,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 434,y1: 519,x2: 434,y2: 586,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 419,y1: 534,x2: 419,y2: 586,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 404,y1: 529,x2: 404,y2: 584,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 390,y1: 530,x2: 390,y2: 584,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 430,y1: 460,x2: 430,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 450,y1: 520,x2: 430,y2: 460,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 475,y1: 505,x2: 475,y2: 590,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 489,y1: 410,x2: 489,y2: 589,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 400,x2: 350,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 334,y1: 400,x2: 334,y2: 494,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 350,y1: 400,x2: 350,y2: 489,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 319,y1: 400,x2: 319,y2: 497,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 350,y1: 489,x2: 370,y2: 529,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 334,y1: 494,x2: 354,y2: 529,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 319,y1: 497,x2: 340,y2: 529,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 370,y1: 529,x2: 370,y2: 584,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 354,y1: 529,x2: 354,y2: 585,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 340,y1: 529,x2: 340,y2: 585,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 580,y1: 380,x2: 580,y2: 259,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 559,y1: 380,x2: 559,y2: 251,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 539,y1: 380,x2: 539,y2: 243,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 500,y1: 410,x2: 500,y2: 589,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 514,y1: 410,x2: 514,y2: 588,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 545,y1: 487,x2: 545,y2: 591,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 564,y1: 490,x2: 564,y2: 590,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 584,y1: 490,x2: 584,y2: 590,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 644,y1: 500,x2: 644,y2: 590,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 515,y1: 240,x2: 515,y2: 380,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 500,x2: 659,y2: 590,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 669,y1: 300,x2: 669,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 469,y1: 470,x2: 469,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 469,y1: 470,x2: 475,y2: 505,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 450,y1: 410,x2: 450,y2: 464,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 450,y1: 464,x2: 464,y2: 505,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 464,y1: 505,x2: 464,y2: 588,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 535,y1: 410,x2: 535,y2: 589,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 524,y1: 410,x2: 524,y2: 590,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 669,y1: 400,x2: 766,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 410,x2: 669,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 484,x2: 659,y2: 475,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 475,x2: 770,y2: 475,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 304,y1: 400,x2: 304,y2: 500,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 304,y1: 500,x2: 324,y2: 530,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 324,y1: 530,x2: 324,y2: 585,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 684,y1: 400,x2: 684,y2: 312,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 645,y1: 484,x2: 629,y2: 510,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 630,y1: 484,x2: 614,y2: 510,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 629,y1: 510,x2: 629,y2: 591,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 614,y1: 510,x2: 614,y2: 591,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 500,x2: 769,y2: 500,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 674,y1: 475,x2: 674,y2: 500,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 435,y1: 380,x2: 435,y2: 245,styling:{main: {"strokeStyle": "#D7DF01","lineWidth": 2},mini: {"strokeStyle": "#D7DF01","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 444,x2: 647,y2: 444,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 475,x2: 659,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 450,x2: 647,y2: 450,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 647,y1: 450,x2: 647,y2: 444,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});

MapSdk.texts.push({text:"FFA",x:500,y:398,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FFA",x:632,y:427,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FFA",x:699,y:381,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"HLVTC",x:684,y:438,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Yasika",x:659,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"TGV",x:677,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:677,y:366,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Ohmykotito",x:677,y:368,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Haank",x:696,y:487,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:696,y:489,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Sunraku",x:696,y:491,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:696,y:493,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Conjack",x:696,y:495,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Stevil000",x:651,y:509,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:651,y:511,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FB11",x:651,y:513,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Skullfull",x:642,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Skullfull",x:637,y:470,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Dark2Flow",x:652,y:470,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Raukada",x:614,y:470,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:614,y:472,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Knoblauchbrot",x:614,y:474,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"RixeBike",x:592,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"DrDantos",x:569,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Skrupellos",x:544,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Undercover",x:519,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Drei",x:529,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"bjrn202000",x:507,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"PP",x:495,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Exklusive",x:495,y:441,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Big Yahu",x:479,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Trump",x:458,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Mönch",x:423,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Megatron",x:440,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Onkel",x:406,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"xsmoke",x:392,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Technoheini",x:377,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"DeffOnly",x:360,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Rudi",x:342,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Aragorn",x:327,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Alkaline",x:312,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});


MapSdk.texts.push({text:"FrankRost",x:375,y:379,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:375,y:381,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Dodge Challenger",x:375,y:383,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Crychotik",x:390,y:341,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Lizard",x:420,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:420,y:352,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Haethras",x:420,y:354,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Kaioshin",x:466,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:466,y:352,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Esrobald",x:466,y:354,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:466,y:356,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"KFC",x:466,y:358,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"PaveLow",x:502,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Einsamer Wolf",x:529,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:529,y:352,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Raphael",x:529,y:354,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"KingSimon1",x:569,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Drei",x:549,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Mevo",x:590,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:590,y:352,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Tranquillo777",x:590,y:354,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Rixe",x:605,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Ree0",x:614,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Raukada",x:627,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:627,y:366,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Koblauchbrot",x:627,y:368,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.mapOverlay.reload();});
