"use strict";
// creating our own data type
Object.defineProperty(exports, "__esModule", { value: true });
//using our own data type 
function cordinate(pt) {
    console.log("x coardinate is ".concat(pt.x));
    console.log("y coardinate is ".concat(pt.y));
}
cordinate({ x: 10, y: 30 });
