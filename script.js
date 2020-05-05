function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

$('.close-icon').on('click',function tvclose() {
  $(this).closest('.tv-card').fadeOut();
})

// ===== Scroll to Bottom ===== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {      // If page is scrolled more than 50px
      $('#return-to-bottom').fadeIn(200);     // Fade in the arrow
  } else {
      $('#return-to-bottom').fadeOut(200);      // Else fade out the arrow
  }
});
$('#return-to-bottom').click(function arrowdown() {     // When arrow is clicked
  $("html, body").animate({ scrollTop: $(document).height() }, 1500);     // Scroll to bottom of body
  return false;
});

// ===== Scroll to Top ===== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {      // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);      // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);     // Else fade out the arrow
  }
});
$('#return-to-top').click(function arrowup() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0     // Scroll to top of body
  }, 500);
});

//Card filter
$(document).ready(function() {
  $("#myInput").on("keyup", function myFilter() {
    var value = $(this).val().toLowerCase();
    $("#myItems .col-xs-3, .col-md-4, .col-lg-2").filter(function() {
	  $(this).toggle($(this).find('h5, p').text().toLowerCase().indexOf(value) > -1)
    });
  });
});