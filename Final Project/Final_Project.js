var mymap = L.map("map").setView([44.6085123, -89.6667297], 8);

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);






var myIcon2 = L.icon({
    iconUrl: 'flying.svg',
    iconSize: [65, 45],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'animal.webp',
    iconSize: [65, 45],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon4 = L.icon({
    iconUrl: 'an.webp',
    iconSize: [65, 45],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon5 = L.icon({
    iconUrl: '547.webp',
    iconSize: [65, 45],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});



var dane = L.marker([43.04319, -89.29244], {icon: myIcon2}).bindPopup("<b>Dane County Humane Society <br/><br/> About: Dane County Humane Society's Wildlife Center provides specialized care and treatment to thousands of injured, ill, or orphaned wild animals every year with the goal of releasing healthy animals back to their natural habitats.<br/> <br/> Phone #: (608) 287-3235 <br/> <br/> Address: 5132 Voges Road Madison, WI 53718<br/>").addTo(mymap)

var wild = L.marker([45.69043, -89.49236], {icon: myIcon3}).bindPopup("<b>Wild Instincts<br/><br/> About: Providing quality, ethical wildlife rehabilitation while promoting wildlife stewardship through education and research.<br/> <br/> Phone #: 715-362-9453 <br/> <br/> Address: 4621 Apperson Dr Rhinelander, WI 54501<br/>").addTo(mymap)

var raptorcenter = L.marker([44.98343, -93.18151], {icon: myIcon4}).bindPopup("<b>The Raptor Center<br/><br/> About: Our mission is to ensure the health of raptors and the world we share. We specialize in the medical care, rehabilitation, and conservation of eagles, hawks, owls, falcons, osprey, and vultures.<br/> <br/> Phone #: 612-624-4745 <br/> <br/> Address: 1920 Fitch Avenue St.Paul, MN 55108<br/>").addTo(mymap)

var raptoreducation = L.marker([45.10500, -89.10500], {icon: myIcon5}).bindPopup("<b>Raptor Education Group Inc<br/> <br/>About: Dedicated to the care and rehabilitation of injured or orphaned native bird species and public education of wildlife issues.<br/> <br/> Phone #: (715)-623-4015 <br/> <br/> Address: N2160 W Rollwood Rd Antigo, WI 54409<br/>").addTo(mymap)



var cflowexLayer = new L.migrationLayer({
            map: mymap,
            data: raptoreducationex,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
    cflowexLayer.addTo(mymap);




var sflowexLayer = new L.migrationLayer({
            map: mymap,
            data: daneex,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
      sflowexLayer.addTo(mymap);


var lflowexLayer = new L.migrationLayer({
            map: mymap,
            data: wildex,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
      lflowexLayer.addTo(mymap);


var pflowexLayer = new L.migrationLayer({
            map: mymap,
            data: raptorcenterex,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
      pflowexLayer.addTo(mymap);


///// Bird Points /////

var myIcon = new L.Icon({
     iconSize: [20, 20],
     iconAnchor: [10, 15],
     popupAnchor:  [1, -24],
     iconUrl: 'Dot.png'
     });
    
var point = new L.geoJson(bird_point, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Location: <b>'+feature.properties.TITLE+ '</b></br>' +
                               '<p>Injury Type: <b>'+feature.properties.TITLE_2+ '</b>' +
                               '<p>Cause of Submission: <b>'+feature.properties.TITLE_3+ '</b>' +
                               '<p>Results:<b> '+feature.properties.TITLE_4)+'</b></p>';}, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: myIcon});
            return marker;
        }}).addTo(mymap);



///// Prop Circles /////

function getRadius(area) {
  var radius = Math.sqrt(area/Math.PI);
  return radius * 15;
}

var propcircles = new L.geoJson(bird_point, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Location: <b>'+feature.properties.TITLE+ '</b></br>' +
                                   'Number of Eagles: '+feature.properties.number_of1+'</p>');
    },
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
          fillColor: "#920101", 
          color: '#920101',
          weight: 2,       
          radius: getRadius(feature.properties.number_of1),
          fillOpacity: .35
      }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});

            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
    });
  }
});



////Legend/////
var baseLayers = {
    'satellite': satellite,
    'Grayscale': grayscale,
	};

var overlayMaps = {
    
    "<img src='Dot.png' height=16> Location of Injured Bald Eagles": point,
    "<img src='3.png' height=16> Number of Eagles in Area": propcircles,
 
};



var legend = L.control.layers(baseLayers, overlayMaps, {collapsed: false}).addTo(mymap);


var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
            toggleDisplay: true,
            position: 'bottomleft'
        }).addTo(mymap);


L.control.scale({position: 'bottomleft', maxWidth: '150', metric: 'True'}).addTo(mymap);


L.easyButton(('<img src="globe_icon.png", height=85%>'), function(btn, map){
    map.setView([44.6085123, -89.6667297], 8);
}).addTo(mymap);


