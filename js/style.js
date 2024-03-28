window.addEventListener('DOMContentLoaded', function () {
    //header burger menu
    let navbar = document.getElementById('navbar')
    let burgerIcon = document.getElementById('burger-icon')
    burgerIcon.addEventListener('click', toggleBurgerMenu)
  
    function toggleBurgerMenu() {
      console.log('enter toggle')
      navbar.classList.toggle('burger-display')
    }

    // **MODALE ROLE
  let ashe = document.querySelector('.ashe');
  let asheModale = document.querySelector('.ashe_big');

  let caitlyn = document.querySelector('.caitlyn');
  let caitlynModale = document.querySelector('.caitlyn_big');

  let lucian = document.querySelector('.lucian');
  let lucianModale = document.querySelector('.lucian_big');

  let lulu = document.querySelector('.lulu');
  let luluModale = document.querySelector('.lulu_big');

  let nautilus = document.querySelector('.nautilus');
  let nautilusModale = document.querySelector('.nautilus_big');

  let rakan = document.querySelector('.rakan');
  let rakanModale = document.querySelector('.rakan_big');

  let rammus = document.querySelector('.rammus');
  let rammusModale = document.querySelector('.rammus_big');

  })
  