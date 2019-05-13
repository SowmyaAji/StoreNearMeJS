
function getAdd() {
    $("#addbtn").on('click', function () {
        myFetch($("#addr").val())
    })
}
getAdd()

function myFetch(address) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const queryUrl = encodeURI('http://photon.komoot.de/api/?limit=1&q=' + address)
    fetch(proxyUrl + queryUrl)
        .then(blob => blob.json())
        .then(data => {
            let addLat = data.features[0].geometry.coordinates[1]
            addLat = parseFloat(addLat)
            let addLong = data.features[0].geometry.coordinates[0]
            addLong = parseFloat(addLong)
            getStoreLocs(addLat, addLong)
        })
}

function getStoreLocs(addLat, addLong) {
    let url = 'parsed.json';
    $.getJSON(url, function (json) {
        let storeArr = json;
        findNearest(addLat, addLong, storeArr)
    })
}
getStoreLocs()

function findNearest(addLat, addLong, storeArr) {
    let distance = null;
    let nearest = null;
    let latLong = [];

    storeArr.forEach((location) => {
        let storeLat = (location['Latitude'])
        storeLat = parseFloat(storeLat)
        let storeLong = (location['Longitude'])
        storeLong = parseFloat(storeLong)
        let dist = getDistance(addLat, addLong, storeLat, storeLong)
        dist = parseFloat(dist);
        if (distance === null || dist < distance) {
            distance = dist;
            distance = parseFloat(distance)
            nearest = location;
            latLong = [storeLat, storeLong]
        }
    })
    let addLatLong = [addLat, addLong]
    console.log(nearest, distance, latLong, addLatLong)
    mylatLng = latLong
    console.log(mylatLng)
    // return {
    //     addLatLong: addLatLong,
    //     location: nearest, distance: distance, latLong: latLong
    // }
}

function getDistance(lat1, lon1, lat2, lon2, unit = "M") {
    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0;
    }
    else {
        let radlat1 = Math.PI * lat1 / 180;
        let radlat2 = Math.PI * lat2 / 180;
        let theta = lon1 - lon2;
        let radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === "K") { dist = dist * 1.609344 }
        if (unit === "N") { dist = dist * 0.8684 }
        return dist;
    }
}



