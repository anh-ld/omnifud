$(document).ready(function() {
  // Show and hide stiky navigation
  $('.section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });

  // Scroll on buttons
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 'slow', function(){
        window.location.hash = hash;
      });
    }
  });

  // Animations
  $('.section-features').waypoint(function(direction) {
    $('.section-features').addClass('animated fadeIn');
  }, {
    offset: '75%'
  });
  $('.section-steps').waypoint(function(direction) {
    $('.section-steps').addClass('animated fadeIn');
  }, {
    offset: '75%'
  });
  $('.section-cities').waypoint(function(direction) {
    $('.section-cities').addClass('animated fadeIn');
  }, {
    offset: '75%'
  });
  $('.section-plans').waypoint(function(direction) {
    $('.special').addClass('animated pulse');
  })
  
  // Expand Navigation
  $('.mobile-nav-icon').click(function() {
    var nav = $('.main-nav');
    var icon = $('.mobile-nav-icon ion-icon')
    nav.slideToggle(500);
    if (icon.attr('name') == "menu") {
      icon.attr('name', 'close');
    } else {
      icon.attr('name', 'menu');
    }
  });
});
