const tabs= document.querySelectorAll('.tab_btn');
const content= document.querySelectorAll('.content');
const flex_2= document.querySelectorAll('.flex_2')
const open= document.querySelectorAll('.open')
const close= document.querySelectorAll('.close')
const container= document.querySelectorAll('.container')
const bar= document.querySelectorAll('.bar')


tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{
    tabs.forEach(tab=>{tab.classList.remove('active')});
    tab.classList.add('active');
    content.forEach(content=>{content.classList.remove('active')});
    content[index].classList.add('active');

    })
})

open.forEach((ope, index) => {
    ope.addEventListener('click', () => {
        flex_2.forEach(flex_2=> flex_2.classList.remove('active')); 
        flex_2[index].classList.add('active');
        container[index].classList.add('active');
        bar[index].classList.add('active');


    });

});

close.forEach((close, index) => {
    close.addEventListener('click', () => {
        flex_2[index].classList.remove('active');
        container[index].classList.remove('active');
        bar[index].classList.remove('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    function revisarVentana() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    const flex = document.getElementById('flex');
    const box2 = document.getElementById('box2');
    const shad = document.getElementById('shad');
    const content = document.querySelectorAll('.content');
    const pers = document.querySelectorAll('.pers');
    const vod = document.querySelectorAll('.vod');
    const tab_box = document.querySelectorAll('.tab_box');
    const sep_1 = document.querySelectorAll('.sep_1');
    const sep_2 = document.querySelectorAll('.sep_2');
    const rom = document.querySelectorAll('.rom');
    const line = document.querySelectorAll('.line');
    const rod = document.querySelectorAll('.rod');
    const item = document.querySelectorAll('.item');


    if (ancho <= 1440) {
        flex.classList.add('active');
        box2.classList.add('active');
        shad.classList.add('active');  // activa la clase
    } else {
        flex.classList.remove('active');
        box2.classList.remove('active');
        shad.classList.remove('active'); // la quita si se agranda
    }

    if (ancho <= 1740) {
        content.forEach(el => el.classList.add('phone'));
        pers.forEach(el => el.classList.add('phone'));
        vod.forEach(el => el.classList.add('phone'));
        tab_box.forEach(el => el.classList.add('phone'));
        sep_1.forEach(el => el.classList.add('phone'));
        sep_2.forEach(el => el.classList.add('phone'));
        rom.forEach(el => el.classList.add('phone'));
        line.forEach(el => el.classList.add('phone'));
        rod.forEach(el => el.classList.add('phone'));
    } else {
        content.forEach(el => el.classList.remove('phone'));
        pers.forEach(el => el.classList.remove('phone'));
        vod.forEach(el => el.classList.remove('phone'));
        tab_box.forEach(el => el.classList.remove('phone'));
        sep_1.forEach(el => el.classList.remove('phone'));
        sep_2.forEach(el => el.classList.remove('phone'));
        rom.forEach(el => el.classList.remove('phone'));
        line.forEach(el => el.classList.remove('phone'));
        rod.forEach(el => el.classList.remove('phone'));
    } 

    if (alto <= 730) {
        item.forEach(el => el.classList.add('active'));
    } else {
        item.forEach(el => el.classList.remove('active'));
    }

    }
window.addEventListener('load', revisarVentana);
window.addEventListener('resize', revisarVentana);
});
