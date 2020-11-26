
const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu');


const mobilemenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click',mobilemenu);