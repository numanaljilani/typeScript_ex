"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
// this will allow to store multiple user   
score = "Hello world";
score = true;
var myUser = { user: "numan", id: 23224 };
var myUserAdmin = { userName: "numan", id: 23224, isAdmin: true };
function getDbId(id) {
    console.log("data base id is ".concat(id));
    // ON DOING OPERATION ON THIS WE HAVE MAKE SURE THIS IS TYPE
    if (typeof id === 'string') {
        id.toUpperCase();
    }
    else {
        id + 2;
    }
}
getDbId(29);
getDbId("11M23V");
// it will not allow to store other data in array
var data = [1, 2, 3, 4, 5];
var data2 = ["aa", "bb", "cc"];
// to allow multiple data type in an array wrap types in () 
var data3 = ["asd", 5, 7, "new"];
// this will not allow to store other then this values 
var seatAllotment;
seatAllotment = "aisel";
seatAllotment = "middle";
