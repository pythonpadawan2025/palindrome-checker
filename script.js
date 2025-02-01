const textInput = document.querySelector('#textInput')
const checkButton = document.querySelector('#check-button')
const resultText = document.querySelector('#resultText')
resultText.style.visibility = 'hidden';

function calculatePalindrome(text) {
    text = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    textReversed = [...text].reverse().join('');

    if (text === textReversed) {
        resultText.innerText = `${textInput.value} is a PALINDROME. Good job!!!`
    } else {
        resultText.innerText = `${textInput.value} is NOT a PALINDROME. Try again!!!`
    }
    resultText.style.visibility = 'visible';
};

checkButton.addEventListener('click', () => {
    if (textInput.value === '') {
        alert("Please enter something!")
    } else {
        calculatePalindrome(textInput.value);
    }
});

textInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        checkButton.click();
    }
});
