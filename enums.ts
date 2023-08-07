// this is special class that represent the group of constant (unchangable variable)
// it comes in two flawer string and number
// by default it value start from 0 and next +1

enum cardinalDirection  {
    north,
    south,
    west,
    east

}

const getEnum = cardinalDirection.north
console.log(getEnum) // it will give 0
// if we console the cardinalDirection.north it will give 1

// we can't assign values to it after declearing it
// cardinalDirection.east = 30 // it will throw an error

enum CardinalDirections {
  North = 1, 
  East,   // by default it will goes in increasing order
  South,
  West
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);


enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


export {}

