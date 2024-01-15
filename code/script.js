$(document).ready(function(){
    $('.mobile-menu-toggle').click(function(){
      $('.mobile-nav').slideToggle();
      $(this).toggleClass('change');
    });
  });
  