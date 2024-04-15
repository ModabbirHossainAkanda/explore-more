for(let i = 1; i<=100; i++){
    if(i % 5 === 0 && i % 7 === 0){
        console.log('mairkhabi');
    }
    else if(i % 5 === 0){
        console.log('latthi khabi');
    }
    else if(i % 7 === 0){
        console.log('ghushi khabi');
    }
    else{
        console.log(i);
    }
}