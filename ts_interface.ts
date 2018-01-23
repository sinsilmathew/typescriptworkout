interface user{
    firstName:string;
    lastName:String;
}

function nameprint(person:user){
    console.log("First Name is : "+person.firstName);
    console.log("Last Name is :"+ person.lastName);
}

let testuser={firstName:"Arun",lastName:"Appu"};
nameprint(testuser);