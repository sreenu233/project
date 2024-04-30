$(document).ready(function() {
    var owl = $('#owl-carousel');
    owl.owlCarousel({
      margin: 30,
      nav: true,
      loop: true,
	  autoplay:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  })

	$(document).ready(function() {
    var owl = $('#owl-carousel2');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 3
        }
      }
    })
  })

	$(document).ready(function() {
    var owl = $('#owl-carousel3');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
       autoplay:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 6
        }
      }
    })
  })
	$(document).ready(function() {
    var owl = $('#owl-carousel4');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  })

	$(document).ready(function() {
    var owl = $('#owl-carousel5');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  })

	$(document).ready(function() {
    var owl = $('#owl-carousel6');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  })

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}