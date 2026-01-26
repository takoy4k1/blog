// Student Performance Dashboard
// You are working on a college result analysis system.
// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
// filter() students who passed (marks ≥ 40)
// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
// reduce() to calculate average marks
// find() the student who scored 92
// findIndex() of student "Kiran"
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];


// filtering the students who passed (marks ≥ 40)
// filter() is used for accessing the elements in list 
// here we use syntax: obj.value because the data is in the form of list of objects
let res1=students.filter(eleObj=>(eleObj.marks>=40))
console.log("Details who passed:",res1)//printing the details of students who passed the exam

// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
let res2=students.map(eleObj =>{
    if(eleObj.marks>=90){
        eleObj.grade='A'
    }
    else if(eleObj.marks>=75){
        eleObj.grade='B'
    }
    else if(eleObj.marks>=60){
        eleObj.grade='C'
    }
    else{
        eleObj.grade='D'
    }
    return eleObj
})
console.log(res2) //Printing the student details with grades according to marks

// reduce() to calculate average marks
//reduce() will have two parameters accumulator and element
//accumulator stores always previous result
//element will get one by one object becaues data is in the form of list of objs
//so we will retrive the data from the obj by using the syntax: obj.value
let res3=students.reduce((acc,eleObj)=>(acc+eleObj.marks),0)
console.log("Average marks of students:",res3/students.length)// Printing the average marks of students


// find() the student who scored 92
//find() is used whether the element is present in object or not

let res4=students.find(eleObj =>eleObj.marks===92)
console.log("Details of student how scored 92:",res4)//Printing the details of student who scored 92



// findIndex() of student "Kiran"
//findIndex() is used to find the index of element 
//if element is present the it will return index 
//if element is not present then -1 is returned 
let res5=students.findIndex(eleObj => eleObj.name==='Kiran')
console.log("Index of the student kiran is :",res5)