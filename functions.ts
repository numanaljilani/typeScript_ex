// simple example of the add two number function return type is number () : number 
// the out put will be stored in variable type of number
function addTowNumber(a : number ,b : number) : number {
    return a+b
}
const addnumber : number = addTowNumber(20 ,23)

// this will work for strtring only 
function forUpperCase(data : string) : string {
    return data.toUpperCase()
}

const upperCasedData : string = forUpperCase("my name")

// this will return the bject data type 
function objectData() : {name : string , isLogin : boolean}{
    return {  name : "numan" , isLogin :true}
}
const jsonData : {} = objectData()

console.log(addnumber)
export {}