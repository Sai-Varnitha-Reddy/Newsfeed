// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    if ( $(window).scrollTop() > 20 ) {
      $("#go-top-button").show();
    } else {
      $("#go-top-button").hide();
    }
  };
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    $(window).scrollTop(0);
  }
  // HAMBURGER NAV //
  document.addEventListener('DOMContentLoaded', function () {
  
    function menuToggle() {
      document.querySelector('.nav').classList.toggle('active');
    }
  
    document.querySelector('.hamburger').addEventListener('click', menuToggle);
    document.querySelector('.cross').addEventListener('click', menuToggle);
  
  });
  
  
  // "listens" for when the window is scrolled on. When a scroll happens, "scrollFunction" is executed
  $(window).scroll(scrollFunction);
  
  
  
  
  // SUBSCRIBE - email address validation //
  
  function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "" || x == null) {
      alert("Email address must be filled out");
      return false;
    }
  };
  