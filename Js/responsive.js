let navber = document.querySelector('.navber')
let listItem = document.querySelector('.list-item')
let sideNav = document.querySelector('.side-nav')
let burger = document.querySelector('.burger');
burger.addEventListener('click',()=>{
    navber.classList.toggle('h-nav')
    listItem.classList.toggle('visable')
    sideNav.classList.toggle('visable')
})