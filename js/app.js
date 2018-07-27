console.log('js loaded');

//  AOS.init({
//   duration: 1200,
// });

$(document).ready(function () {

  $(this).scrollTop(0);


  $(function() {
    $('a').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

});
