
function initialize() {
	var myLatlng =	new google.maps.LatLng(43.655671, -79.380633)
  var mapOptions = {
    zoom: 16,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: "Party!"
	});
}
	

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

