let mapToken = myToken

console.log("Map Token:", mapToken);
console.log("Coordinates:", coordinates);

const map = new mapboxgl.Map({
    accessToken: mapToken,
    container: 'map', // container ID
    center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10 // starting zoom
});

// console.log(response.body.features[0]);


const marker = new mapboxgl.Marker({ color: 'black' })
    .setLngLat(coordinates)        //Listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h4>${listingTitle}</h4><p>Exect Location will be provided after booking</p>`)
    )
    .addTo(map);