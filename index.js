const input = document.getElementById('input')

const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const check = () => {
    const value = input.value;
    const reverse = reverseString(value);
    if (reverse === value) {
        alert('Palindromo Positivo');
    } else {
        alert('Palindromo Negativo');
    }
    input.value = '';
}






























