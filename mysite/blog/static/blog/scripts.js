//Hover effect Jquery 
$(document).ready(function() {

  $(".content-section").addClass("animated zoomInDown")

  $(".pollContainer li").hover(function() {
    $(this).addClass('animated bounce');
  }, function() {
    $(this).removeClass('animated bounce');
  });

  $(".pollContainer li").hover(function() {
    $(this).addClass('animated bounce');
  }, function() {
    $(this).removeClass('animated bounce');
  });
});

// Google Maps
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}