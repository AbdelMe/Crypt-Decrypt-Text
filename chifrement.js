const decalage = document.getElementById('Number');
const word = document.getElementById('text');
const btnEncrypted = document.getElementById('btn');
const btnDecrypted = document.getElementById('Dechifre'); 
const res = document.getElementById('res');


const lst_w = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Function For Encrypt The Text
btnEncrypted.addEventListener('click', () => {
    let result = "";
    for (let letter of word.value) {
        if (letter >= 'a' && letter <= 'z') {
            const index = lst_w.indexOf(letter);
            const newIndex = (index + parseInt(decalage.value)) % 26;
            result += lst_w[newIndex];
        } else if (letter >= 'A' && letter <= 'Z') {
            const index = lst_w.indexOf(letter.toLowerCase());
            const newIndex = (index + parseInt(decalage.value)) % 26;
            result += lst_w[newIndex].toUpperCase();
        } else {
            result += letter;
        }
    }
    res.innerHTML ='The Text Encrypted Is: ' + result;
});

//Function For Decrypt The Text
btnDecrypted.addEventListener('click', () => {
    console.log('ee')
    let result = "";
    for (let letter of word.value) {
        if (letter >= 'a' && letter <= 'z') {
            const index = lst_w.indexOf(letter);
            const newIndex = (index - parseInt(decalage.value) + 26) % 26; 
            result += lst_w[newIndex];
        } else if (letter >= 'A' && letter <= 'Z') {
            const index = lst_w.indexOf(letter.toLowerCase());
            const newIndex = (index - parseInt(decalage.value) + 26) % 26;
            result += lst_w[newIndex].toUpperCase();
        } else {
            result += letter;
        }
    }
    res.innerHTML ='The Text Decrypted Is: ' +  result;
});
