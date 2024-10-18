const button1 = document.getElementById('button1');
const body = document.querySelector('body');
const hexCode = '0123456789ABCDEF';

let interValId=undefined;
button1.addEventListener('click', () => {
    interValId = setInterval(()=>{
        changeColor();
    },1000);
});

button2.addEventListener('click', () => {
    clearInterval(interValId);
});

function changeColor(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        let randomNumber = Math.floor(Math.random() * 15);
        hexColor += hexCode[randomNumber];
    }
    body.style.backgroundColor = hexColor;
}