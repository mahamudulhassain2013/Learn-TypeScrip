
/**
 * @desc Switch Case that checks the variable charecter and match the case if any case is match then display vowel otherwise consonant.
 * @param {string} charecter            this is the input variable
 * @returns                             Display Vowel or Consonant
 * 
 */

let charecter:string = "M";
switch(charecter){

    case 'a': 
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A': 
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    console.log("Charecter are Vowel");
    break;

    default:
        console.log("Charecter are Consonant");
}