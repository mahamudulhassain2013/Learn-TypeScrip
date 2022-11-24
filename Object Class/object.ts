


// creating the Object Employee with assign properties

const Employee: {
    firstname:string;                   // Declaring the  Properties datatype 
    lastname: string;
    age:Number;
    designation:string;
    company: string
} = {
    firstname: "Mahamudul",                           
    lastname: "Hasan", 
    age: 25,
    designation: "Frontend Web Developer",
    company: "everylearning.org"
};

// creating an instance using object 

console.log(Employee.firstname + " " + Employee.lastname + " is " + Employee.designation);
console.log("Company name is " + Employee.company);