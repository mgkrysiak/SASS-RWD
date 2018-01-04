document.addEventListener('DOMContentLoaded', function(e) {
  var mobile = window.matchMedia("(max-width: 420px)");
  var menu = document.querySelector('.menu');
  var button = document.querySelector('input');

  function hideNavigation () {
    if (mobile.matches) {
      menu.style.display = 'none';
      button.style.display = 'block';
    }
    else {
      menu.style.display = 'block';
      button.style.display = 'none';
      }
    }
  hideNavigation();

  button.addEventListener('click', function(){
    if (menu.style.display = 'none') {
      menu.style.display = 'block';
    }
    else if (menu.style.display = 'block'){
      menu.style.display = 'none';
    }
  })


mobile.addListener(function(mobile){
hideNavigation(mobile);
})

})
