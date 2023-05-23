const showArray = (array) => {
    for(let i = 0; i <= array.length - 1; i++){
        if(array[i] === array[i + 1])
       return true
        else
        return false;
    }
}

console.log(showArray([1,1,2]));