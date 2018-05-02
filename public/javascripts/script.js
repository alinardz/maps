document.addEventListener('DOMContentLoaded', () => {
    //para almacenar variables sin nombre, son instancias
    const markers = [];
    console.log('IronGenerator JS imported successfully!');


    function startMap() {
        const map = new google.maps.Map(document.getElementById("bliss"), {
            zoom: 10,
            center: { lat: 19.4000658, lng: -99.1687963 }
        });

        fetch("api/restaurants")
            .then(response => {
                if (!response.ok) return console.log(e);
                //json es un metodo que va a sacar los datos y te los va a entregar en el siguiente then
                return response.json();
            })
            .then(restaurants => {
                restaurants.forEach(r => {
                    drawMarker(map, r);
                });
                map.setCenter(drawMarker(map, restaurants[0]));
            });

    }

    //r = restaurante
    /*     function drawMarker(map, r) {

            const pos = {
                lat: r.address.coord[1],
                lng: r.address.coord[0]
            };
            markers.push(new google.maps.Marker({
                position: pos,
                map: map,
                title: r.name,
            }));
            return pos;
        } */

    function drawMarker(map, r) {
        var infowindow = new google.maps.InfoWindow({
            content: r.name
        });
        const pos = {
            lat: r.address.coord[1],
            lng: r.address.coord[0]
        };

        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            label: r.name,
            title: r.name,
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        })
        markers.push();
        return pos;
    }

    startMap();
}, false);