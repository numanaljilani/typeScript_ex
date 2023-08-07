let score : string | number | boolean = 33
// this will allow to store multiple user   
score = "Hello world"
score = true


type User = { user : string , id : number}
type Admin = { userName : string , id : number , isAdmin : boolean}

const myUser : User | Admin = { user : "numan" , id : 23224 }
const myUserAdmin : User | Admin = { userName : "numan" , id : 23224 , isAdmin : true}


function getDbId( id: number | string ){
    console.log(`data base id is ${id}`)
    // ON DOING OPERATION ON THIS WE HAVE MAKE SURE THIS IS TYPE
    if(typeof id === 'string'){
        id.toUpperCase()
    }else{
        id + 2 
    }
}
getDbId(29)
getDbId("11M23V")

// it will not allow to store other data in array
const data : number [] = [1,2,3,4,5]
const data2 : string [] = ["aa" , "bb" , "cc"]

// to allow multiple data type in an array wrap types in () 
const data3 : (string | number ) [] =["asd" ,5, 7, "new"]

// this will not allow to store other then this values 
let seatAllotment : "aisel" | "middle" | "window"
seatAllotment = "aisel"
seatAllotment = "middle" 

// seatAllotment = "newMiddle" this will not allow you to store other values
 
export {}