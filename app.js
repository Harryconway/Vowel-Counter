let word = document.querySelector('.input-text');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', countVowel);

function countVowel() {
    let vowelCount = 0;
    let wordVal = word.value;

    for (let i = 0; i < wordVal.length; i++) {
        let letter = wordVal[i];

        if (letter.match(/([a, e, i, o, u, A, E, I, O, U])/)) {
            vowelCount++
        }
    }
    result.innerHTML = `${word.value} has ${vowelCount} vowels.`;
}