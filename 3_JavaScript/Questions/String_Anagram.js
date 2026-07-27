function anagram(first, second) {
    if(first.length != second.length) {
        return false;
    }
    for (c of first) {
        if (!second.includes(c)) {
            return false;
        }
    }
}

function anagram2 (first, second) {
    if(first.length != second.length) {
        return false;
    }
    let arr1=  first.split('');
    let arr2=  second.split('');
    console.log(arr1);
    console.log(arr2);
    

    for (let i=0;i<arr.length;i++) {
        if(arr1[i]!=arr2[i]) {
            return false;
        }
    }
    return true;
}