$(document).ready(function(){

  var animated_objects = $(".removed");

  $("#mlg-off").click(function(e){
    e.preventDefault();
    animated_objects.removeClass('removed').hide();
  });
  $("#mlg-on").click(function(e){
    e.preventDefault();
    animated_objects.addClass('removed').show();

  });
});
