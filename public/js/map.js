function initMap() {
    var uluru1 = {lat: 19.498726, lng: 97.909161};
    var map1 = new google.maps.Map(document.getElementById('map-1'), {
        zoom: 15,
        center: uluru1
        });
    var marker1 = new google.maps.Marker({
        position: uluru1,
        map: map1
        });
    }
