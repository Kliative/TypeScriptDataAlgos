function stringMatching(words) {
    let arr = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[i].includes(words[j]) && words[i] != words[j]) {

                arr.push(words[j])


            }
        }
    }
    return [...new Set(arr)];;
};

console.warn(stringMatching(["mass","as","hero","superhero"]
));