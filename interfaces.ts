// interface is define the syntex  that any entity adhere to .
interface User {
    name : string,
    age : number
}

const uer1 : User ={
    name : "numan",
    age : 33
}
//this is same as aliases
// inter faces can inharit  others property 

interface NewUsr extends User { // this inherit the property of others 
    gender : string
    getName : () => string  // getName() : string    both are valid (return type is string)
    getAge() : number     
}

const newUser1 : NewUsr ={
    name :'name',
    age: 23 ,
    gender : "male",
    getName : () =>{
        return "hello"
    },
    getAge :() =>{
        return 20
    }
}
// aurangabad : maharashtra
export {} 