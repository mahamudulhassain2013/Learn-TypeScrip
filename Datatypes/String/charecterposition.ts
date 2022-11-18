function findindex(str:string, character:string){
    // let character:String = "s";

    
let i, j, position = -1, count = 0;

for( i = 0; i <= str.length; i++)


{   
    if (str[i] == character[0])
    {

        position = i;

        for( j = 0; j < character.length; j++)
        {
            if (str[i] == character[j])
            count++;
            i++;

        }
        if (count == character.length)
        {

            console.log("character are found " + character, position);
            break;
        }
    
        else
        {
            position = -1;
            count = 0;
        }
    }
        
}


}
console.log(findindex("Hello World", 'H'));






