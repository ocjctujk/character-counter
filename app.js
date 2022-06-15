

// Html Elements
const textArea = document.getElementById('text');
const remainingText = document.getElementById('remaining-text');
const totalText = document.getElementById('total-text');

//Global varibales
const limit = 550;
let remaining;
let total;

setText(remainingText,limit);

textArea.addEventListener('input',()=>{
    total = textArea.value.length;
    if(limit<total){
        text.value = text.value.slice(0,limit);
        total = 550;
    }

    remaining = limit - total;
    setText(remainingText,remaining);
    setText(totalText,total);
})


function setText(element,text){
    element.innerText = text;
}