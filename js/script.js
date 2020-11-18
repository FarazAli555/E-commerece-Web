$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    $(".nav").toggleClass("showing");
  });
});

$(document).ready(function () {
  $(".nav.showing").on("click", function () {
    $(".nav ul").toggleClass("semiDropDownshowing");
  });
});

function semiDropDown(e) {
  let x = e.children[1];
  if (x.style.maxHeight == "initial") {
    x.style.maxHeight = "0";
  } else {
    x.style.maxHeight = "initial";
  }
}

$(".client-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
