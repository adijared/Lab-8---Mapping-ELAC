var map = L.map('map', {
  center: [34.040898, -118.148300],
  zoom: 17.5,
});


// Search Addresses
L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
    map.fitBounds(e.geocode.bbox);
  })
  .addTo(map);

map.locate({ setView: true, maxZoom: 18 });

map.on('locationfound', function(e) {
  L.marker(34.04105157356271, -118.14870506398354).addTo(map)
    .bindPopup("My fave, Husky Cafe!").openPopup();
});


//Scale bar
L.control.scale().addTo(map);

// --- Basemap options ---
var Satellite = L.tileLayer(
 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var CartoLight = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var CartoDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var StamenTerrain = L.tileLayer(
  'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
  { attribution: 'Map tiles by Stamen Design — Data © OpenStreetMap' }
);


var EsriTopo = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var EsriSat = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

// Default basemap
Satellite.addTo(map);

// You can add or remove basemaps here. A button will appear top right of map to toggle.
var baseMaps = {
  "Satellite (Esri)": EsriSat,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "Stamen Terrain": StamenTerrain,
  "Esri Topo": EsriTopo
};

L.control.layers(baseMaps).addTo(map);

65
//// adding shapes to the map


// Make a simple circle
var circle = L.circle([34.04105157356271, -118.14870506398354], {
    color: 'pink',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(map)
  .bindPopup("The Husky Cafe!");

// Make a shape
var polygon = L.polygon([
    [34.041618, -118.148413],
    [34.041394, -118.148571],
    [34.041232, -118.148257],
    [34.041258, -118.148235],
    [34.041150, -118.148013],
    [34.041131, -118.148020],
    [34.041113, -118.147981],
    [34.041168, -118.147931],
    [34.041173, -118.147943],
    [34.041252, -118.147892],
    [34.041264, -118.147913],
    [34.041334, -118.147866],
]).addTo(map);

polygon.bindPopup("ELAC Social Sciences Department (F7)").openPopup();

// Add a marker
L.marker([39.983219999796114, -75.15356557830536]).addTo(map);
