class student{
    fullName:string;
    constructor(public firstName:string,public middleName:string,public lastName:string)
    {
        this.fullName=firstName+ " "+middleName+" "+lastName;
    }
  
}

interface Person{
    firstName:string;
    lastName:string;
}

function printname(user:Person){
    console.log("Hello" +user.firstName+ " "+user.lastName);
}

let testusers=new student("Arun","A","Appu");
console.log("Student Object value:" +testusers.fullName);

printname(testusers);