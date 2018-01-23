var student = /** @class */ (function () {
    function student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return student;
}());
function printname(user) {
    console.log("Hello" + user.firstName + " " + user.lastName);
}
var testusers = new student("Arun", "A", "Appu");
console.log("Student Object value:" + testusers.fullName);
printname(testusers);
