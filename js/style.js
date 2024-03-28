window.addEventListener('DOMContentLoaded', function () {
    //header burger menu
    let navbar = document.getElementById('navbar')
    let burgerIcon = document.getElementById('burger-icon')
    burgerIcon.addEventListener('click', toggleBurgerMenu)
  
    function toggleBurgerMenu() {
      console.log('enter toggle')
      navbar.classList.toggle('burger-display')
    }
  })
  