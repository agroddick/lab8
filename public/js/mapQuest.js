function initMap() {
	L.mapquest.key = 'dSDQgAK6ojaCO3sSCrirtzpYwvnXxKH9';

	var map = L.mapquest.map('map', {
		center: [32.879544, -117.238445],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	//Add a marker to the map
	L.marker([32.879544, -117.238445]).addTo(map);
}