
// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.
// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];
// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"


//Task1. filter() courses with name length > 5
const courses = ["javascript", "react", "node", "mongodb", "express"];
let res1=courses.filter(ele=>ele.length>5)//filtering the elements which length is greater than 5
console.log("courses with name length > 5:",res1)//printing the result which are >5

//Task2. map() to convert course names to uppercase
// to convert the lower case letters to uppercase we use syntax:obj.toUpperCase()
let res2=courses.map((ele)=>(ele.toUpperCase()))//making the elements uppercase
console.log("convert course names to uppercase:",res2)//printing the result in uppercase

//Task3. reduce() to generate a single string:
//  "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let res3=courses.reduce((acc,ele)=>acc+ele+' | ')
console.log("generate a single string of cources:",res3)

//Task4. find() the course "react"
let res4=courses.find(ele => ele==='react')
console.log("cource react:",res4)

//Task5. findIndex() of "node"
let res5=courses.findIndex(ele => ele==='node')
console.log("Index of node :",res5)