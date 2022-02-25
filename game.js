let box2 = document.querySelectorAll('span')[2];
let box3 = document.querySelectorAll('span')[3];

let box4 = document.querySelectorAll('span')[4];
let box5 = document.querySelectorAll('span')[5];
let box6 = document.querySelectorAll('span')[6];
let box7 = document.querySelectorAll('span')[7];
let box8 = document.querySelectorAll('span')[8];
let box9 = document.querySelectorAll('span')[9];
let box10 = document.querySelectorAll('span')[10];
let box11 = document.querySelectorAll('span')[11];
let box12 = document.querySelectorAll('span')[12];

let big = document.querySelector('#big');

document.addEventListener('DOMContentLoaded',reset());

turn = true;
big.addEventListener('click',function(e){
    if (turn===true && e.target.textContent!=='o' && e.target.textContent!=='x') {
        if (e.target.className==='r1' || e.target.className==='l1' || e.target.className==='center') {
            e.target.textContent = 'x';
            turn = false;
        }; 
    }else if (turn===false && e.target.textContent!=='o' && e.target.textContent!=='x') {
        if (e.target.className==='r1' || e.target.className==='l1' || e.target.className==='center') {
            e.target.textContent = 'o';
            turn = true;
        };
    };
    if (box4.textContent==='x'&& box5.textContent==='x'&& box6.textContent==='x'||
    box7.textContent==='x'&& box8.textContent==='x'&& box9.textContent==='x'||
    box10.textContent==='x'&& box11.textContent==='x'&& box12.textContent==='x'||
    box4.textContent==='x'&& box7.textContent==='x'&& box10.textContent==='x'||
    box5.textContent==='x'&& box8.textContent==='x'&& box11.textContent==='x'||
    box6.textContent==='x'&& box9.textContent==='x'&& box12.textContent==='x'||
    box4.textContent==='x'&&box8.textContent==='x'&&box12.textContent==='x'||
    box6.textContent==='x'&&box8.textContent==='x'&&box10.textContent==='x') {
        box2.textContent= Number(box2.textContent)+1;
        reset();
    }else if (box4.textContent==='o'&& box5.textContent==='o'&& box6.textContent==='o'||
    box7.textContent==='o'&& box8.textContent==='o'&& box9.textContent==='o'||
    box10.textContent==='o'&& box11.textContent==='o'&& box12.textContent==='o'||
    box4.textContent==='o'&& box7.textContent==='o'&& box10.textContent==='o'||
    box5.textContent==='o'&& box8.textContent==='o'&& box11.textContent==='o'||
    box6.textContent==='o'&& box9.textContent==='o'&& box12.textContent==='o'||
    box4.textContent==='o'&&box8.textContent==='o'&&box12.textContent==='o'||
    box6.textContent==='o'&&box8.textContent==='o'&&box10.textContent==='o') {
        box3.textContent= Number(box3.textContent)+1;
        reset();
    }else if (box4.textContent!==' '&&box5.textContent!==' '&&box6.textContent!==' '&&box7.textContent!==' '&&
    box8.textContent!==' '&&box9.textContent!==' '&&box10.textContent!==' '&&box11.textContent!==' '&&box12.textContent!==' ') {
        reset();
    };
});
function reset (){
    box4.textContent=" ";
    box5.textContent=" ";
    box6.textContent=" ";
    box7.textContent=" ";
    box8.textContent=" ";
    box9.textContent=" ";
    box10.textContent=" ";
    box11.textContent=" ";
    box12.textContent=" ";
};
