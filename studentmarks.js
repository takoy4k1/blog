// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.
// Test data:
// const marks = [78, 92, 35, 88, 40, 67];
// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
const marks = [78, 92, 35, 88, 40, 67];
//Task1. filter() marks ≥ 40 (pass marks)
let res1=marks.filter(ele => ele>=40)
console.log("marks ≥ 40:",res1) // printing the marks greater than 40

//Task2. map() to add 5 grace marks to each student
let res2=marks.map(ele=>ele+5) // updating the marks by 5 for  all elements
console.log("add 5 grace marks to each student:",res2) // printing the result after updation


//Task3. reduce() to find highest mark
//here we are checking accumator value is greater or not 
// if accmulator value is greater then store accumulator is not changed 
// if accmulatoe value is not gerater then element is stroed in accumulator

let res3=marks.reduce((acc,ele) =>acc>ele?acc:ele)
console.log("find highest mark:",res3)

//Task4. find() first mark below 40
let res4=marks.find(ele=>ele<40)
console.log("first mark below 40:",res4)

//Task5. findIndex() of mark 92
//checking element is equal to 92 or not if it is equal then index is returned
//else -1 is returned
let res5=marks.findIndex(ele => ele===92)
console.log("92 present at index:",res5)