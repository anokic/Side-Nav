window.onload = function() {

  document.querySelector('.hamburger').addEventListener('click', ()=>{

      document.querySelector('.nav').classList.toggle('showNav');
      document.querySelector('.hamburger').classList.toggle('hamburgerMove');
      let lines = document.querySelectorAll('.line');

      for(line of lines){

        line.classList.toggle('ex');
      }

      setTimeout(navLinks, 450);
  })

  function navLinks() {
    let links = document.querySelector('.nav').children;
    let i = 1;

    for(link of links){
      link.classList.toggle('marginLeft');
      link.style.transition = 'all ' + ( i / 7 ) + 's ease-in';
      i++;
    }
  }
}
