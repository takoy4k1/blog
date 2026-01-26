// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
    
// Calculate total marks
// Calculate average marks
// Find the highest scoring subject
// Add a new subject computer: 90
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Adding a new subject computer: 90
marks.computer=90
let totalmarks=0
let high=-9000
for(let i in marks){
    if(high < marks[i]){
        high=marks[i];
    }
    totalmarks+=marks[i]
}

// Calculate total marks
console.log(totalmarks)


// Calculate average marks
console.log(totalmarks/Object.keys(marks).length)


// Find the highest scoring subject
console.log(high)