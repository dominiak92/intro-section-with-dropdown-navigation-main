const openBtnMobile = document.querySelector('.menubutton');
const closeBtnMobile = document.querySelector('.menubutton-close');
const sideMenu = document.querySelector('.sidemenu');
const opacity = document.querySelector('.opacity')
const menuOption = [...document.querySelectorAll('.menu-container')]
const menuOptionDesktop = [...document.querySelectorAll('.menu-container-desktop')]

//OTWIERANIE I ZAMYKANIE MENU W WERSJI MOBILNEJ
let closeMenu = () => {
    sideMenu.style.transform = "translateX(100%)"
    opacity.style.display = 'none'
}
let openMenu = () => {
    sideMenu.style.transform = "translateX(0%)"
    opacity.style.display = 'block'
}

menuOption.forEach(list => {list.addEventListener('click', () => {
list.classList.toggle('active')
})

} )
// //OTWIERANIE I ZAMYKANIE W WERSJI DESKTOP
menuOptionDesktop.forEach(list => {list.addEventListener('click', () => { 
        list.classList.toggle('active');
})
    })

closeBtnMobile.addEventListener('click', closeMenu);
openBtnMobile.addEventListener('click', openMenu);