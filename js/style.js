window.addEventListener('DOMContentLoaded', function () {
    //header burger menu
    let navbar = document.getElementById('navbar');
    let burgerIcon = document.getElementById('burger-icon');
    burgerIcon.addEventListener('click', toggleBurgerMenu);
  
    function toggleBurgerMenu() {
      console.log('enter toggle');
      navbar.classList.toggle('burger-display');
    }
    
    /*let slider = document.getElementById('.slider');
    slider.addEventListener('click', function(event) {
      let body = document.querySelector('.all_elements');
      body.style.fontFamily = "sans-serif";
    })*/
    
  });
  