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

  let latlon = "lat=" + position.coords.latitude + "&" + "lon=" + position.coords.longitude

  let map_url = "https://embed.waze.com/iframe?zoom=12&" + latlon + "&pin=1"

  document.getElementById("map").innerHTML = "<iframe src='" + map_url + "'></iframe>"

}