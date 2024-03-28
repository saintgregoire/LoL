function openModale(element, modale ){
  element.addEventListener('click', function(){
  modale.style.display = "block";
});
}

function closeModale(element, modale ){
  element.addEventListener('click', function(){
  modale.style.display = "none";
});
}


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

  let ashe = document.querySelector('.ashe > button');
  let asheModale = document.querySelector('.ashe_big');
  let asheClose = document.querySelector('.close_ashe');
  openModale(ashe, asheModale );
  closeModale(asheClose, asheModale );


  let caitlyn = document.querySelector('.caitlyn > button');
  let caitlynModale = document.querySelector('.caitlyn_big');
  let caitlynClose = document.querySelector('.close_caitlyn');
  openModale(caitlyn, caitlynModale );
  closeModale(caitlynClose, caitlynModale );


  let lucian = document.querySelector('.lucian > button');
  let lucianModale = document.querySelector('.lucian_big');
  let lucianClose = document.querySelector('.close_lucian');
  openModale(lucian, lucianModale );
  closeModale(lucianClose, lucianModale );

  let lulu = document.querySelector('.lulu > button');
  let luluModale = document.querySelector('.lulu_big');
  let luluClose = document.querySelector('.close_lulu');
  openModale(lulu, luluModale );
  closeModale(luluClose, luluModale );

  let nautilus = document.querySelector('.nautilus > button');
  let nautilusModale = document.querySelector('.nautilus_big');
  let nautilusClose = document.querySelector('.close_nautilus');
  openModale(nautilus, nautilusModale );
  closeModale(nautilusClose, nautilusModale );

  let rakan = document.querySelector('.rakan > button');
  let rakanModale = document.querySelector('.rakan_big');
  let rakanClose = document.querySelector('.close_rakan');
  openModale(rakan, rakanModale );
  closeModale(rakanClose, rakanModale );

  let rammus = document.querySelector('.rammus > button');
  let rammusModale = document.querySelector('.rammus_big');
  let rammusClose = document.querySelector('.close_rammus');
  openModale(rammus, rammusModale );
  closeModale(rammusClose, rammusModale );

  let viego = document.querySelector('.viego > button');
  let viegoModale = document.querySelector('.viego_big');
  let viegoClose = document.querySelector('.close_viego');
  openModale(viego, viegoModale );
  closeModale(viegoClose, viegoModale );

  let khazix = document.querySelector('.khazix > button');
  let khazixModale = document.querySelector('.khazix_big');
  let khazixClose = document.querySelector('.close_khazix');
  openModale(khazix, khazixModale );
  closeModale(khazixClose, khazixModale );

  let lux = document.querySelector('.lux > button');
  let luxModale = document.querySelector('.lux_big');
  let luxClose = document.querySelector('.close_lux');
  openModale(lux, luxModale );
  closeModale(luxClose, luxModale );

  let orianna = document.querySelector('.orianna > button');
  let oriannaModale = document.querySelector('.orianna_big');
  let oriannaClose = document.querySelector('.close_orianna');
  openModale(orianna, oriannaModale );
  closeModale(oriannaClose, oriannaModale );

  let zed = document.querySelector('.zed > button');
  let zedModale = document.querySelector('.zed_big');
  let zedClose = document.querySelector('.close_zed');
  openModale(zed, zedModale );
  closeModale(zedClose, zedModale );

  let garen = document.querySelector('.garen > button');
  let garenModale = document.querySelector('.garen_big');
  let garenClose = document.querySelector('.close_garen');
  openModale(garen, garenModale );
  closeModale(garenClose, garenModale );

  let ksante = document.querySelector('.ksante > button');
  let ksanteModale = document.querySelector('.ksante_big');
  let ksanteClose = document.querySelector('.close_ksante');
  openModale(ksante, ksanteModale );
  closeModale(ksanteClose, ksanteModale );

  let gwen = document.querySelector('.gwen > button');
  let gwenModale = document.querySelector('.gwen_big');
  let gwenClose = document.querySelector('.close_gwen');
  openModale(gwen, gwenModale );
  closeModale(gwenClose, gwenModale );

  })
  