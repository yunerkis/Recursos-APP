$(document).ready(function(){
    $('#menu').hide();
    $("#hide").click(function(){
        $("#menu").slideToggle();
    });

    $('.goTop').click(
        function(){
            $('html,body').animate({scrollTop:'0px'}, 500);return false;
        }
  );
});
