// Google Maps
function init_map() {
  const mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(-3.1168223036944758, -60.01794142059322),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  const map = new google.maps.Map(
    document.getElementById("gmap_canvas"),
    mapOptions
  );
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(-3.1170635606519195, -60.01795158117493),
    map: map,
    icon: "./images/pointer_map.png",
    animation: google.maps.Animation.DROP,
  });

  google.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, "load", init_map);
