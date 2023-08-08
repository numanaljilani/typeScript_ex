"use strict";
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
class User {
  constructor(name, email, city) {
    this.name = name;
    this.email = email;
    this.city = city;
    this.country = "india";
  }

  // variable inside constructor defined will be available in whole class
}
const user1 = new User("numan", "numan@gmail.com", "Aurangabad");
