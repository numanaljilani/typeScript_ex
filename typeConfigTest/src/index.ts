// // console.log("Hello world")
// class User {
//     name : string 
//     email : string 
//     city : string
//    readonly country : string = "india"
//     constructor(name : string ,email : string , city : string ){
//         this.name = name
//         this.email = email
//         this.city = city
//     }
// }
class User {  // above and this both are same in same 
   readonly country : string = "india"
    constructor(public name : string ,public email : string , public city : string ){
    }
}

const user1 = new User("numan" , "numan@gmail.com" ,"Aurangabad")