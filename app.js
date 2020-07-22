let outputBox = document.getElementById('output')
function getLocation() {
  if (navigator.getLocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    outputBox.innerHTML = "Geolocation is not supported by this brower."
  }
}

function showPostion(position) {
  outputBox.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}