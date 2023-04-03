const intText = document.querySelector('#Firstplace');
const outText = document.querySelector('#OutText');
const btn = document.querySelector('#sumbitBtn');

function CP(e){
    outText.textContent = intText.value;
    intText.textContent = outText.value;
    intText.value = "";
    console.log(outText.textContent);
}