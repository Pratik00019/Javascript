const box = document.querySelector('.box');


setInterval(()=>{
    const date = new Date();
    box.innerHTML = date.toTimeString();
}, 1000);

// boxes.forEach((box)=>{
//     box.addEventListener('click', ()=>{

//     })
// })