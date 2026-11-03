function add(a:number,b:number){
    return a+b ;
};

add(1,7);

// expilct type annotations

let studentName:string = "rahul";
let age:number = 12;
let Enrolled:boolean = true;

// type inference

let course = "I'm learning Typescript";

  // Arrays and

let skills: [string,number]=["Javascript",100];

 

console.log(skills);

// Objects

type Student={
    id:number,
    name:string,
    isPassed:boolean,
    email?:string;
};

const student1:Student = {
    id:1,
    name:"Rahul",
    isPassed:true

};

console.log(student1)

// union types

 let id: number | string ;
 id = "Emp-01";
 id = 594;
 id= "Emp-1"

 console.log(id)

 // literals 

  type Userrole = "Admin" | "developer" | "emp" ;
  
  let currentRole: Userrole = "Admin"