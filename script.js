function initMap() {

  var myCenter = new google.maps.LatLng(-34.397, 150.644);

  var map = new google.maps.Map(document.getElementById("map"), {
    center: myCenter,
    zoom: 8,
    streetViewControl: true
  });

var marker = new google.maps.Marker({
  position: myCenter
});
marker.setMap(map);

google.maps.event.addListener(marker, "click", function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
});
}

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("questionBtn").addEventListener("click", myFunction);
});

function myFunction() {
  alert("If you have questions, contact me at:\nnbatensamayoa@hawk.illinoistech.edu");

}