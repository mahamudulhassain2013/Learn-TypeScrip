
/**
 *@desc Write a program that check a number prime or not.
 @param {Number} n              This is the input
 @returns                       Display the nnumber prime or not                      
 */


let j:any, n:number = 13, counter:number = 0;

for( j = 2; j < n; j++ ){
    if(n % j == 0){
        counter++;
        break;
    }
}

if(counter == 0){
    console.log("Prime Number");
}
else {
    console.log("Not Prime");

}
