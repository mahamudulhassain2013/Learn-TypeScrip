
/**
 * @desc  function factorial that input the number and calculate the factorial number.
 * @param {Number} num               This is the input number
 * @returns {Number} factorial        Print the factorial number
 * 
 */
        

   function factorial (num: Number)
   {
    let i:number = 1, fact:number = 1; 
    while(i <= num)
    {
        fact = fact * i;
        i++;

    }

        console.log(fact);

   }

   factorial(5);

   
  

  
