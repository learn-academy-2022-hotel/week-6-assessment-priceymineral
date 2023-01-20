// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
// TEST PSEUDO
// describe - choose a name for the fxn
// it - returns an array, with a string for each object in the input array, with the names capitalized
// expect - use the const provided to compare the actual result to my fxn's actual o/p
// error - check for the "good" error: "<fxn name> is not defined"

describe("peopleInfo", () => {
  it("returns an array with a string for each object in the input array, with names capitalized", () => {
    expect(peopleInfo(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// FXN PSEUDO
// declare a fxn that takes one array argument
  // initialize an info variable for the result array
  // iterate over the input array
    // initialize a variable for the name value
    // initialize a variable for the occupation value
    // capitalize the first letter of each string in the name var
    // initialize a varible and use string interpolation to build the appropriate string (format `${name} is ${occupation})
    // push the string to the info array
  // return the info array

const peopleInfo = (peopleArr) => {
  let info = []
  for (const person of peopleArr) {
    let name = person.name
    let occupation = person.occupation
    /////Before one-liner///////
    // let nameArr = name.split(" ")
    // name = nameArr.map(word => {
    //   return word[0].toUpperCase() + word.substring(1)
    // }).join(" ")
    //////////////////////////
    // one liner info: https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
    name = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let personInfo = `${name} is ${occupation}.`
    info.push(personInfo)
  }
  return info
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
