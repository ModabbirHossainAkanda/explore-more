const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'agun'};
const friends = [13, 17,33, 40, 10,9, 19];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

// ..............
console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.includes(252) !== -1){

}

// concat: join something with others