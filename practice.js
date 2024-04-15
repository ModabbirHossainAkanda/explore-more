// ludu khelay amra kivabe 1 take 6 songkha randomly print korte parseInt...
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}
console.log(getRandomNumber(1, 6));

// problem -2:
// // kivabe amra amader srenikokkher sokoler nam Alphabetically sajate pari
const students = ['sumit', 'saad', 'mahim','akash', 'batash', 'arif', 'sifat'];

console.log(students.sort());

// problem-3:
// kivabe amra amader srenikokkher sokoler roll number krom onujayi sajate pari?
const roll_numbers = [3, 5, 1, 6, 2, 10, 30];
console.log(roll_numbers.sort(function(a,b){
    return b-a;
}));

// problem-4:
// kono ekta sal leap year kina seta ber korte pari kivabe?
function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(
            `${year} is a leap year`);
    }else{
        console.log(
            `${year} is not a leap year`);
    }
}

isLeapYear(2032);

// problem: 5
// kono sentence a kotogula vowel ache ta kivabe nirnoy kora jai?
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels (sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value, index, array){
       if(vowels.includes(value)){
        count++;
       } 
    });
    return count;
}
console.log(countVowels('I love Bangladesh'));