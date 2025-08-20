// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {
    
    let words = str.split(" ");

    let capitalizedWords = [];

    for (let i = 0; i < words.length; i++) 
    {
        let word = words[i];

        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        capitalizedWords.push(capitalizedWord);
    }

    let result = capitalizedWords.join(" ");

    return result;
}

console.log(capitalizeWords("hello , world")); 