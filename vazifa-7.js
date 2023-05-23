const showArray = (array) => {
    
    let c = Math.floor(array.length / 2);
    let result = [array[c - 1], array[c], array[c + 1]];
    console.log(result);
}

showArray([1,2,3,4,5,6,6,9]);