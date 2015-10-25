$(document).ready(function(){

  var animated_objects = $(".images");
  var main_animated_objects = $(".swag");
  $("#mlg-off").click(function(e){
    e.preventDefault();
    animated_objects.addClass('hidden');
    main_animated_objects.removeClass('animated');
    main_animated_objects.removeClass('infinite');
  });
  $("#mlg-on").click(function(e){
    e.preventDefault();
    animated_objects.removeClass('hidden');
    main_animated_objects.addClass('animated');
    main_animated_objects.addClass('infinite');
  });

});
