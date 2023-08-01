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






const images = [...document.querySelectorAll('.image')];
  
  // popup
  

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `images/imgc-${i+1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})

const imagesInt = [...document.querySelectorAll('.image-int')];



// popup

const popupInt = document.querySelector('.popup-int');
const closeBtnInt = document.querySelector('.close-btn-int');
const imageNameInt = document.querySelector('.image-name-int');
const largeImageInt = document.querySelector('.large-image-int');
const imageIndexInt = document.querySelector('.index-int');
const leftArrowInt = document.querySelector('.left-arrow-int');
const rightArrowInt = document.querySelector('.right-arrow-int');

let index_int = 0; // will track our current image;

imagesInt.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImageInt(i);
        popupInt.classList.toggle('active');
    })
})

const updateImageInt = (i) => {
    let path = `images/img-${i+1}.png`;
    largeImageInt.src = path;
    imageNameInt.innerHTML = path;
    imageIndexInt.innerHTML = `0${i+1}`;
    index_int = i;
}

closeBtnInt.addEventListener('click', () => {
    popupInt.classList.toggle('active');
})

leftArrowInt.addEventListener('click', () => {
    if(index_int > 0){
        updateImageInt(index_int - 1);
    }
})

rightArrowInt.addEventListener('click', () => {
    if(index_int < imagesInt.length - 1){
        updateImageInt(index_int + 1);
    }
})


// ah-popup

const imagesA = [...document.querySelectorAll('.image-a')];



// popup

const popupA = document.querySelector('.popup-a');
const closeBtnA = document.querySelector('.close-btn-a');
const imageNameA = document.querySelector('.image-name-a');
const largeImageA = document.querySelector('.large-image-a');
const imageIndexA = document.querySelector('.index-a');
const leftArrowA = document.querySelector('.left-arrow-a');
const rightArrowA = document.querySelector('.right-arrow-a');

let index_a = 0; // will track our current image;

imagesA.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImageA(i);
        popupA.classList.toggle('active');
    })
})

const updateImageA = (i) => {
    let path = `images/imga-${i+1}.png`;
    largeImageA.src = path;
    imageNameA.innerHTML = path;
    imageIndexA.innerHTML = `0${i+1}`;
    index_a = i;
}

closeBtnA.addEventListener('click', () => {
    popupA.classList.toggle('active');
})

leftArrowA.addEventListener('click', () => {
    if(index_a > 0){
        updateImageA(index_a - 1);
    }
})

rightArrowA.addEventListener('click', () => {
    if(index_a < imagesA.length - 1){
        updateImageA(index_a + 1);
    }
})
