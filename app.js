let outputBox = document.getElementById('output')
function getLocation() {
  if (navigator.geolocation) {
    //navigator.geolocation.getCurrentPosition(showPosition)
    navigator.geolocation.watchPosition(showPosition)
  } else {
    outputBox.innerHTML = "Geolocation is not supported by this brower."
  }
}

function showPosition(position) {
  outputBox.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}