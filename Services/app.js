/* toogle menu */
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";

}
function hideMenu() {
    navLinks.style.right = "-200px"
}

$('.fa-xmark').hover(function () {
    $(this).addClass('fa-beat-fade');
}, function () {
    $(this).removeClass('fa-beat-fade');
});


$('.fa-bars').hover(function () {
    $(this).addClass('fa-bounce');
}, function () {
    $(this).removeClass('fa-bounce');
});


// Get the button:
let mybutton = document.getElementById("myBtn");
const tablet = window.matchMedia('(min-width: 420px)')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && tablet.matches) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

function topFunction() {
    currentYOffset = self.pageYOffset;
    initYOffset = currentYOffset;
  
    var intervalId = setInterval(function(){
    currentYOffset -= initYOffset*0.07; 
    document.body.scrollTop = currentYOffset ;
    document.documentElement.scrollTop = currentYOffset;
  
      if(self.pageYOffset == 0){
        clearInterval(intervalId);
      }
    }, 20);
  
  } 


// play audio on hover

  $(".nav-li").mouseenter(function(){
	$("<audio></audio>").attr({ 
		'src':'../audio/'+'lightsaber.mp3', 
		'volume':0.01,
		'autoplay':'autoplay'
	}).appendTo("body");
});



const fadeOut = () => {
    const loaderWrapper = document.querySelector('loader')
    loaderWrapper.classList.add('fade');
}
// window.addEventListener('load', fadeOut);

  $(window).on('load', function (fadeOut) {
    $('.loader').hide();
  }) 


