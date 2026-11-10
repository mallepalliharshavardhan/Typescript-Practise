"use strict";
// function add(a:number,b:number){
//     return a+b ;
// };
// add(1,7);
// // expilct type annotations
// // let studentName:string = "rahul";
// let age:number = 12;
// let Enrolled:boolean = true;
// // type inference
// let course = "I'm learning Typescript";
//   // Arrays and
// let skills: [string,number]=["Javascript",100];
// console.log(skills);
// // Objects
// type Student={
//     id:number,
//     name:string,
//     isPassed:boolean,
//     email?:string;
// };
// const student1:Student = {
//     id:1,
//     name:"Rahul",
//     isPassed:true
// };
// console.log(student1)
// // union types
//  let id: number | string ;
//  id = "Emp-01";
//  id = 594;
//  id= "Emp-1"
//  console.log(id)
//  // literals 
//   type Userrole = "Admin" | "developer" | "emp" ;
//   let currentRole: Userrole = "Admin"
//   // functions
//     // explict parameters
//    function multipy(a:number, b:number){
//     return a*b;
// }
// console.log(multipy(2,5));
// //default or optional parameters
//  const formatUserprofile= (name:string , role:string = "student", age?:number) =>{
//     return `${name} (${role}, Age:${age})`;
//  }
//  console.log(formatUserprofile("Harsha"));
//  //function
//   const getCourseProgress= (LearnerName:string, LessonCount:number)=>{
//     return `${LearnerName} completed ${LessonCount} lessons`
//   } 
//    console.log(getCourseProgress("Harsha",4));
// Part 1 – Variables and types
// Create these variables with appropriate TypeScript types:
// 1. studentName – string
// 2. studentAge – number
// 3. isEnrolled – boolean
// 4. studentId – should accept either a number or a string.
let studentName = "Ganju";
console.log(studentName);
let studentAge = 22;
console.log(studentAge);
let isEnrolled = true;
console.log(isEnrolled);
let studentId = "EMP-01";
console.log(studentId);
