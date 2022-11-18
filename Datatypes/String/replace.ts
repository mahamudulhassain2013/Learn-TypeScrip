//using replace method

// let str = "Hello I am Mahamudul Hasan";
// let newString = str.replace("a", "A");
// console.log(newString);




function replaceCharecter(str:String, character:string, index:string ){
  let arr= str.split("");
    let i:Number;
    for(let i= 0; i< arr.length; i++)
    {
      if (arr[i] == index){
        arr[i] = character;
      }
      
      
       
     
  
     }
  console.log(arr.join(""));
}
    
console.log(replaceCharecter("Hello World", "B", "W"));



