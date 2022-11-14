
let  str:string = "I am Mahamudul Hasan ";
 
let regexp= /Mahamudul/gi;
 

if (str.search(regexp) == -1 ) {
  console.log("Not Found" );
} else {
  console.log("Found" );
}