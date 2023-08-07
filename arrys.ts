// definng an array
const myArray : number [] = []
const array2 : Array <string>  = []


// defining our own typed array
type User = { name : string , isActive : boolean}

const userArray : User [] = [{name : "numan" , isActive : true}]
const userArray2 : Array <User> = [{name : "aljilani" , isActive : false}]

// this will define arrays of array nested array
const MLModel : number [][] = [
    [3,4,5,6],
    [0,5,6]
]

export {}


// myArray.push(20)