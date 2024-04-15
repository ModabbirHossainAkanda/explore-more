const names = ['rahim', 'karim', 'abul', 'chabul', 'hasan', 'rahim', 'rahim', 'abul', 'galib', 'abul', 'rahim'];

function closeDuplicate(names){
    const unique = [];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = closeDuplicate(names);
console.log(uniqueNames);