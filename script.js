function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("questionBtn").addEventListener("click", myFunction);
});

function myFunction() {
  alert("If you have questions, contact me at:\nnbatensamayoa@hawk.illinoistech.edu");

}