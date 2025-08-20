// Problem 7: Find Even Numbers in an Array

function findEvenNumbers(arr) {

    let result = [];

    for (let num of arr) {

        if (num % 2 === 0) {
            result.push(num);
        }
    }
    
    return result;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 