const writeReverse = (array) => {
    let reverse = new Array;
    for(let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i]);
    }

    console.log(reverse);
}

writeReverse([1,23423,5465,7656,2,'sad']);