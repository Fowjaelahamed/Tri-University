function initMap(){
    const bengalSoft = {lat: 23.8114, lng: 90.4233};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: bengalSoft,
    });
    const imageUrl = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const marker = new google.maps.Marker({
        position: bengalSoft,
        map: map,
        icon: imageUrl,
    });
    const contentString = '<div id="contentString"><h6><img class="bengal" src="/logo/logo/bengalsoft.png" alt="bengal Software logo"> Bengal Software</h6><p>2nd floor, Adept KR Complex, Beside Jamuna Future Park, Dhaka 1229</p></div>';
    const infoWindow = new google.maps.InfoWindow({
        content: contentString,
    });
    marker.addListener("click",function (){
        infoWindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });
}
window.initMap = initMap();