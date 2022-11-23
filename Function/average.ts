
/**
 * @desc Function that input three numbers and calculate the average number.
 * @param num1 Number       this is the first number
 * @param num2 Number       thsi is the second number
 * @param num3 Number       this is the third number
 * @returns average Number          returns  the average value.
 */



function average (num1:number, num2:number, num3:number) {
    let avg:number;

    avg = (num1 + num2 + num3) / 3;


    return avg;
   
}

     console.log(average(20,30,50));


