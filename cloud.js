$("#main-wrapper").ready(function() {

    var fx = function fx() {
      return $("img:last", this).fadeToggle();
    };
  
    $(".img-wrapper").hover(fx, fx);
  
  });