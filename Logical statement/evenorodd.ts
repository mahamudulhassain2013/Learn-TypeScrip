
/**
 * @desc Function Checknumber that use the if else condition to check the input number is Even, ODD.
 * @param {Number} num             this are the varriable type Number
 * @returns                        returns the numbers even , ODD or Invalid
 */


function checkNumber(num: any){

    // Check the condition

    if (num % 2 == 0){
        console.log("Even Number");

    }
    // some other condition

    else if(num % 2 == 1) {
        console.log("Odd Number");
    }

    // condition isn't met

    else 
    console.log("Invalid Number");
  
}

checkNumber(-7);