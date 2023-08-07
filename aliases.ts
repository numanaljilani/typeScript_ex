// creating our own data type

type point = { x : number ; y : number }

//using our own data type 
function cordinate(pt:point){
    console.log(`x coardinate is ${pt.x}`)
    console.log(`y coardinate is ${pt.y}`)
}

cordinate({x : 10 , y : 30})

export {}