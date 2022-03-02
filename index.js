
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('.li-modal').on('click', function(e){
  e.preventDefault();
  $('#staticBackdrop').modal('show').find('.modal-content').load($(this).attr('href'));
});
