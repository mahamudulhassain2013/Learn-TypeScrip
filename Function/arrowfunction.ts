
/**
 @desc Usng arrow  Function that print array element.
 @param  {Array<string>} arr   Type of array is string.
 @returns  arr                 returns the array element.
 */


let myFunction = (arr: Array<string>) => 
{
 
for(let i = 0; i < arr.length; i++){

    console.log(arr[i]);
}
return arr;
    
}

myFunction(["Brazil", "Argentina", "France", "Spain", "Portugal", "Jarmany", "Netherland"]);

