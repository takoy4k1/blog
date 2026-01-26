// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//Task1. filter() temperatures above 35
let res1=temperatures.filter(ele=>ele>35)
console.log("Temps above 35:",res1)

//Task2. map() to convert all temperatures from Celsius → Fahrenheit
let res2=temperatures.map(ele=>ele*2+30)
console.log("Celsius → Fahrenheit Temps:",res2)

//Task3. reduce() to calculate average temperature
let avgtemp=temperatures.reduce((acc,ele)=>acc+ele)
console.log("Average Temp:",avgtemp/temperatures.length)

//Task4. find() first temperature above 40
let findval=temperatures.find(ele=>ele>40)
console.log("First temperature above 40:",findval)

//Task5. findIndex() of temperature 28
let findidx=temperatures.findIndex(ele=>ele===28)
console.log("28 present at index:",findidx)