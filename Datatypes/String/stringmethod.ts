
let len:Number,  slice:string, substring:string, substr:string, replace:string, toUpperCase:string, toLowerCase:string, concat:string, split,join:string, indexOf:Number, search;
let str1:string, str2:string, text:string;

 str1 = "I loves Bangladesh";
 str2 = "Hello World";
 text = "I loves Tigers. tigers is the most powerfull animal in the forest."


 len = str1.length; 
 console.log(len);

 slice = str1.slice(8, 14);
 console.log(slice);

 substring = str1.substring(7, 14);
 console.log(substring);
 
 substr = str1.substr( 8, 6);
 console.log(substr);

 replace = str2.replace("World", "Programmers");
 console.log(replace);

 toLowerCase = str1.toLowerCase();
 console.log(toLowerCase);

 toUpperCase = str2.toUpperCase();
 console.log(toUpperCase);

 concat = str2.concat(" ", text);
 console.log(concat);

 split = str2.split("");
 console.log(split);

 indexOf = str2.indexOf("W");
 console.log("Index of " + indexOf);

 search = text.search("most");
 console.log(search);



