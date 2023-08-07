"use strict";
// this is special class that represent the group of constant (unchangable variable)
// it comes in two flawer string and number
// by default it value start from 1 and next +1
Object.defineProperty(exports, "__esModule", { value: true });
var cardinalDirection;
(function (cardinalDirection) {
    cardinalDirection[cardinalDirection["north"] = 0] = "north";
    cardinalDirection[cardinalDirection["south"] = 1] = "south";
    cardinalDirection[cardinalDirection["west"] = 2] = "west";
    cardinalDirection[cardinalDirection["east"] = 3] = "east";
})(cardinalDirection || (cardinalDirection = {}));
var getEnum = cardinalDirection.north;
console.log(getEnum);
