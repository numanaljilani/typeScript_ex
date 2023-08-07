const data : (string | number ) [] = ["numan" , 435]
const data2 : (string | number ) [] = [  435, "numan"]
 
// In above example we can put the string and number any where 
// in tupels we have to place the type at there defined placeses

let ex1 : [number , string ]
ex1 = [23, "numan"] // we have to provide according to the sequence
// ex2 = ["numan" , 23 ] this will give an error

let rgb : [number , number , number ]
rgb = [255 , 255 , 0] // this will put all the number 
// rgb = [25 , 55 ,7 , 7 ] this will show an error it allows only specfied length


// create our own type
type User = [string , number ]
const newUser : User = ["name" , 234] // it will not allow to interchange the place
export {}