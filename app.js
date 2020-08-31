let outputBox = document.getElementById('output')
function getLocation() {
  if (navigator.geolocation.getCurrentPosition) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    outputBox.innerHTML = "Geolocation is not supported by this brower."
  }
}

function showPosition(position) {
  outputBox.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}