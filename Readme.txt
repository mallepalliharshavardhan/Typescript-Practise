
.............  Setup -> code Compaile ......................

1.package.json file    --->    npm init -y 

2. install typescript  --->    npm install typescript --sve-dev

3. Generate typescripy Config -->   npX tsc --init

4. app.ts we have written the business logic code in typescript

5. we have to complie the code --> npx tsc app.ts

6 if there are no error it will create a JS file 

7. then compile the Js file ---> node app.json

 ## Type Annotators
  ### Expilict type Annotators
  ### Inference type Annotators

## Arrays and Objects


  for arrays Eg: let marks:number[] =[12,34,23,44,93]; // standard array
 
  Objects: we create clear blue prints
    type empData ={
        id:number  ,
        Name:String,
        Salary:number,
        dept:string
    }

 ## Union types --> Multiple types allows
  
   let id :number | string ;
   
   ## literal types --> Restricts a variable to the excat values 
 
