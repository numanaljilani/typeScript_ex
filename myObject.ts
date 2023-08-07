type User ={
    readonly _id : string , // this will create it readOnly we cant change it after declearing it
    name : string , 
    age : number ,
    phone : number ,
    isActive : boolean , 
    creditCardDetails ?: number  // ? this will make it optional
} 

const myDetails :User ={
    _id : "1234dba",
    name : "numan",
    age : 23 ,
    phone : 8788628712,
    isActive : true,
    creditCardDetails : 123  // ? this will make it optional

}


// define  new type card number 
type cardNumbe = {
    cardnumber : number 
}
// define card date 
type cardDate = {
    cardDate : string 
}

//  now we have created a third data type using privoius 2 type & operator will combine both of them 
type cardDetails = cardNumbe & cardDate & { cvv : number }
