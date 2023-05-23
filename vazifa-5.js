const changeArray = (arr1, arr2) => {
    let newArr = new Array;
    for(let i = 0; i <= arr1.length - 1; i++){
        if(arr1[i] === arr2[i])
        newArr.push(arr1[i],arr2[i]);
    }

    console.log(newArr);
}

changeArray([1,2,3],[1,3,4]);