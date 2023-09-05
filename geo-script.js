// script.js

let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 15,
    });

    // Add a click event listener to the map to place a marker
    map.addListener("click", (event) => {
        placeMarker(event.latLng);
    });
}

function placeMarker(location) {
    // Remove existing marker if it exists
    if (marker) {
        marker.setMap(null);
    }

    // Create a new marker at the clicked location
    marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true,
    });

    
    const coordinatesParagraph = document.getElementById("coordinates");
    coordinatesParagraph.textContent = `Latitude: ${location.lat().toFixed(6)}, Longitude: ${location.lng().toFixed(6)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const geotagButton = document.getElementById("geotag-button");

    geotagButton.addEventListener("click", () => {
        if (marker) {
            alert("Tree geotagged successfully!");
        } else {
            alert("Please click on the map to geotag a tree first.");
        }
    });
});
