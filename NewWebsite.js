$('button').click(function(){
    var bubbles = $('.bubble-wrap').addClass('fade-in');
});

$(document).ready(function(){
    $("#bubbles").fadeIn(3000);
  });

$(document).ready(function() {
    $('#hi').fadeOut(1);
    $('#hi').removeClass('bubble-wrap');
    $('#hi').fadeIn(2500);
});
