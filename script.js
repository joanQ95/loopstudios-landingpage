'use strict'

const hamburguer = document.querySelector('#open-btn')
const closeBtn = document.querySelector('#close-btn')


const navBar = document.querySelector('.navbar-nav')

const navbarToggle = () => navBar.classList.toggle('active')

hamburguer.addEventListener('click', navbarToggle)
closeBtn.addEventListener('click', navbarToggle)