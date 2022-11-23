

let concatenation:Array<string>, constructor:Function, copywithin:Array<string>, entries:any, everymethod:boolean, fillmethod:Array<string>, filtermethod:Array<Number>, findmethod:any, findindex:any, foreach, arrayfrom:Array<string>, includesmethod:boolean, indexOf:number, isArray:boolean, lastIndex:Number, lengthmethod:number, mapmethod:Array<Number>, popmethod:any, pushmethod:Number, reverse:any, shift:any, sort:Array<string>, splicemethod:any, toSting:string, unShift:number; 

let arr1 = ["firstname", "lastname", "fullname"];
let arr2 = ["Mahamudul", "Hasan", "Belal", "Rajib", "Mohom", "Mahamudul", "Nadim"];
const ages = [6,14,22,26,16];
let language = ["Bangla", "English", "Hindi", "Spanish", "malailam", "Urdu", "malailam", "Teligu", "Spanish", "Portugise"];
let country = ["Bangladesh", "India", "Pakistan"];
let text = 'This is dummy text';


concatenation = arr1.concat(arr2);
console.log("Concatenation = " + concatenation +  '\n');

constructor = arr2.constructor;
console.log("Constructormethod = " + constructor +"\n");

copywithin =  language.copyWithin(2, 0);
console.log("Copywithin method = " + copywithin + "\n");

entries = language.entries();
console.log( "entriemethod =" + "\n");
for(let x of entries){
    console.log(x);   
}

fillmethod = language.fill("Tamil", 2, 4);
console.log("fillmethod = " + fillmethod + "\n");

filtermethod = ages.filter(checkage);
console.log("filtermethod = " + filtermethod + "\n");

function checkage(age:any){

    return age > 18;
}

findmethod = ages.find(checkage);
console.log("findmethod = " + findmethod + "\n")
splicemethod
findindex = ages.findIndex(checkage);
console.log("findIndex method = " + findindex + "\n");
arr2

everymethod = ages.every(checkage);
console.log("everymethod = " + everymethod + "\n");

arrayfrom = Array.from(text);
console.log("from method = " + arrayfrom + "\n");

includesmethod = language.includes("English", 4);
console.log("includemethod = " + includesmethod + "\n");

indexOf = arr1.indexOf("fullname");
console.log("indexOf method = " + indexOf + "\n");

isArray = Array.isArray(language);
console.log("isArray method= " + isArray + "\n");

lastIndex = arr2.lastIndexOf("Mahamudul");
console.log("lastIndex method = " + lastIndex + "\n");

lengthmethod = language.length;
console.log("lengthmethod = " + lengthmethod + "\n");

mapmethod = ages.map(MyFunction);
console.log("mapmethod = " + mapmethod + '\n');

function MyFunction(age:any){
    return age * 5;
}

popmethod = arr2.pop();
console.log("After using pop method " + arr2 + "\n");
console.log("popmethod = " + popmethod + '\n');

 pushmethod = arr2.push("Shepon");
 console.log("After using pushmethod " + arr2 + "\n");
 console.log("pushmethod = " + pushmethod + "\n");

 reverse = arr1.reverse();
 console.log(" reversemethod = " + reverse + "\n");

 shift = arr2.shift();
 console.log(" shiftmethod = " + shift + "\n");
 console.log(arr2 + "\n");

 sort = arr2.sort();
 console.log("sortmethod = " + sort + "\n");

 splicemethod = country.splice(2, 0, "Canada", "USA");
 console.log( "splicemethod = " +  country + "\n" );

 toSting = ages.toString();
 console.log("toString method = " + ages + "\n");

 unShift = country.unshift("Iran");
 console.log("unshift method = " + country + "\n");








