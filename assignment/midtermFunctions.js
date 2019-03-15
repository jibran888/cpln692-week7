/* ================================
Week 7 Assignment: Midterm Functions + Signatures
================================ */

// add Marker for every Point
var addMarker = (dataLine) => {
  console.log(dataLine);
  console.log([dataLine.Lng, dataLine.Lat]);
  L.marker([dataLine.Lat, dataLine.Lng]).addTo(map);
};

// if not use the above, use the below to plot markers on map
var downloadData = $.ajax("https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-crime-snippet.json");
var parseData = function(rawData) {return JSON.parse(rawData);};
var makeMarkers = function(pData) {
  var markers = [];
  _.each(pData, (dataLine) => {markers.push(L.marker([dataLine.Lat, dataLine.Lng]))});
  return markers;
};
var plotMarkers = function(marker) {
  _.each(marker, (mark) => {
    mark.addTo(map);
  });
};




// filter by certain criteria (number of reviews, number of stars)

// map centered on Charlotte NC
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
