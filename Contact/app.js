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

  var intervalId = setInterval(function () {
    currentYOffset -= initYOffset * 0.07;
    document.body.scrollTop = currentYOffset;
    document.documentElement.scrollTop = currentYOffset;

    if (self.pageYOffset == 0) {
      clearInterval(intervalId);
    }
  }, 20);

}


// play audio on hover

$(".nav-li").mouseenter(function () {
  $("<audio></audio>").attr({
    'src': '../audio/' + 'lightsaber.mp3',
    'volume': 0.01,
    'autoplay': 'autoplay'
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





var validate = function (e) {
  var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
  var regEx;
  var removeSpan;
  var par;
  var check = false;
  var val;
  var errArr = [];

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value === "") {

      if (fields[i].nextElementSibling.classList.contains('error')) {
        removeSpan = fields[i].nextElementSibling;
        par = fields[i].parentNode;
        par.removeChild(removeSpan);
        fields[i].nextElementSibling.innerHTML = "Hmmm! " + fields[i].placeholder + " is required?";
        fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
        check = false;
        errArr.push(fields[i]);
      }
      fields[i].nextElementSibling.innerHTML = "Hmmm! " + fields[i].placeholder + " is required?";
      fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
      check = false;
      errArr.push(fields[i]);
    } else {

      // check if message and name values contain valid characters.
      if (fields[i].id !== 'email' && fields[i].id !== 'phone') {
        val = isValidChar(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML = "Are you trying to HACK ME!";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }

      if (fields[i].id === 'phone') {
        val = isValidPhone(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML = "Hmmm! Your phone number is not valid?";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }

      if (fields[i].id === 'email') {
        val = isValidEmail(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML = "Hmmm! Your email address is not valid?";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }
    }
  }

  if (check === false) {
    var count = 0;
    var toErr = setInterval(function () {
      var e = errArr[0].offsetTop + -25;
      var pos = Math.abs(e);
      if (count < pos) {
        count++;
        window.scrollTo(0, count);
      } else {
        clearInterval(toErr);
      }
    }, 1);
  }

  return check

  // Helper functions.
  function isValidEmail(e) {
    regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = e.value;
    if (!regEx.test(email)) {
      return false;
    }
  }

  function isValidChar(e) {
    regEx = /^[a-zA-Z@#$%!?^&*()_+\-=\[\]{};':"\\|,.\/? ]*$/;
    var value = e.value;
    if (!regEx.test(value)) {
      return false;
    }
  }

  function isValidPhone(e) {
    regEx = /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/;
    var value = e.value;
    if (!regEx.test(value)) {
      return false;
    }
  }
};






