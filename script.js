document.addEventListener('DOMContentLoaded', function () {
    function revisarVentana() {
        const ancho = window.innerWidth;
        const der = document.querySelectorAll('.der')
        const stats = document.querySelectorAll('.stats')
        const vod2 = document.querySelectorAll('.vod2')
        const view= document.querySelectorAll('.view');
        const menu1= document.querySelectorAll('.menu1');
        const menu2= document.querySelectorAll('.menu2');
        const tab_box= document.querySelectorAll('.tab_box');
        const menu= document.querySelectorAll('.menu');
        const liststyle= document.querySelectorAll('.liststyle');
        const tab_btn= document.querySelectorAll('.tab_btn');
        const information= document.querySelectorAll('.information');
//        const menu= document.querySelectorAll('.menu');
//        const menu= document.querySelectorAll('.menu');

        if (ancho <= 1440){
            der.forEach(el => el.classList.add('active'));
        } else {
            der.forEach(el => el.classList.remove('active'));
        }

        if (ancho <= 1800){
            stats.forEach(el => el.classList.add('responsive'));
            vod2.forEach(el => el.classList.add('responsive'));
        } else {
            stats.forEach(el => el.classList.remove('responsive'));
            vod2.forEach(el => el.classList.remove('responsive'));
        }

        if (ancho <= 1200){
            view.forEach(el => el.classList.add('responsive'));
            menu1.forEach(el => el.classList.add('responsive'));
            menu2.forEach(el => el.classList.add('responsive'));
            tab_box.forEach(el => el.classList.add('responsive'));
            menu.forEach(el => el.classList.add('responsive'));
            liststyle.forEach(el => el.classList.add('responsive'));
            tab_btn.forEach(el => el.classList.add('responsive'));
            information.forEach(el => el.classList.add('responsive'));
            stats.forEach(el => el.classList.add('respon'));
//            .forEach(el => el.classList.add('responsive'));
//            .forEach(el => el.classList.add('responsive'));
        } else {
            view.forEach(el => el.classList.remove('responsive'));
            menu1.forEach(el => el.classList.remove('responsive'));
            menu2.forEach(el => el.classList.remove('responsive'));
            tab_box.forEach(el => el.classList.remove('responsive'));
            menu.forEach(el => el.classList.remove('responsive'));
            liststyle.forEach(el => el.classList.remove('responsive'));
            tab_btn.forEach(el => el.classList.add('responsive'));
            information.forEach(el => el.classList.add('responsive'));
            stats.forEach(el => el.classList.remove('respon'));
//            .forEach(el => el.classList.add('responsive'));
//            .forEach(el => el.classList.add('responsive'));
        }

    }
    window.addEventListener('load', revisarVentana);
    window.addEventListener('resize', revisarVentana);
});

const cortina= document.querySelectorAll('.cortina')
const open= document.querySelectorAll('.open')
const close= document.querySelectorAll('.close')
const main= document.querySelectorAll('.main')

open.forEach((open,index)=>{
    open.addEventListener('click',()=>{
        cortina[index].classList.add('active');
        main[index].classList.add('active');
    })
})
close.forEach((close, index) => {
    close.addEventListener('click', () => {
        cortina[index].classList.remove('active');
        main[index].classList.remove('active');
    })
})

const tabs= document.querySelectorAll('.tab_btn');
const view= document.querySelectorAll('.view');
const liststyle= document.querySelectorAll('.liststyle');
const anim= document.querySelectorAll('.anim');
const listpoint= document.querySelectorAll('.listpoint');
tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{
    tabs.forEach(tab=>{tab.classList.remove('active')});
    tab.classList.add('active');
    view.forEach(content=>{content.classList.remove('active')});
    view[index].classList.add('active');
    liststyle.forEach(liststyle=>{liststyle.classList.remove('active')});
    liststyle[index].classList.add('active');
    anim.forEach(anim=>{anim.classList.remove('active')});
    anim[index].classList.add('active');
    listpoint.forEach(listpoint=>{listpoint.classList.remove('active')});
    listpoint[index].classList.add('active');
    })
})
