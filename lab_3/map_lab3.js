var mymap = L.map("map").setView([46.0834480, -94.4463719], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FtZXJvbndpbGxjb3giLCJhIjoiY2xzM2U5MDhjMHh5aDJqbXVuOGNtdW9rbSJ9.LSCQIKlrm7va8OFs8tuZug', {
 maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

Fridley = L.marker([45.0931479, -93.2620724], {icon: myIcon1}).bindPopup("<b>Fridley").addTo(mymap)
   

Fridley = L.marker([46.7489435, -92.1450918], {icon: myIcon3}).bindPopup("<b>Duluth").addTo(mymap)
 
Fridley = L.marker([46.3791465, -92.7865413], {icon: myIcon2}).bindPopup("<b>Sturgeon Lake").addTo(mymap)
  

Fridley = L.marker([46.1234011, -93.6053424], {icon: myIcon4}).bindPopup("<b>Mille Lacs").addTo(mymap)
  

Fridley = L.marker([44.9771231, -93.2669072], {icon: myIcon5}).bindPopup("<b>Minneapolis").addTo(mymap)


Fridley = L.marker([48.9403571, -95.0014398], {icon: myIcon9}).bindPopup("<b>Baudette").addTo(mymap)


Fridley = L.marker([44.0210003, -92.4617455], {icon: myIcon7}).bindPopup("<b>Rochester").addTo(mymap)
  
Fridley = L.marker([44.0494903, -91.6398176], {icon: myIcon6}).bindPopup("<b>Winnona").addTo(mymap)
  

Fridley = L.marker([44.5671499, -92.5357603], {icon: myIcon8}).bindPopup("<b>Red Wing").addTo(mymap)
    
