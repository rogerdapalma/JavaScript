const map = L.map('map', {
    crs: L.CRS.Simple
});

const imageDimensions = [2048, 2048];
const bounds = [[0, 0], imageDimensions];

L.imageOverlay('GTAV_SATELLITE_2048x2048.webp', bounds, {
    noWrap: true
}).addTo(map);

map.fitBounds(bounds);
map.setMaxBounds(bounds);
map.setMinZoom(map.getZoom());

map.on('contextmenu', function(e) {
    const popupContent = document.createElement('div');
    popupContent.innerHTML = '<input type="text" placeholder="Descrição" id="descInput"><br><input type="color" id="colorPicker"><br><button id="saveButton">Salvar</button><br><button onclick="removeMarker()">Remover</button>';
    const marker = L.marker(e.latlng, {
        icon: new L.DivIcon({
            className: 'custom-marker',
            html: '<div class="marker-div" style="background-color: #3388ff;"></div>'
        })
    }).addTo(map).bindPopup(popupContent);

    marker.on('popupopen', function() {
        document.getElementById('descInput').value = marker.options.title || '';
        document.getElementById('colorPicker').value = marker.options.color || '#3388ff';
        document.getElementById('saveButton').onclick = function() {
            saveMarkerDetails(marker);
        };
        document.querySelectorAll('button')[1].onclick = function() {
            removeMarker(marker);
        };
    });

    marker.on('add', function() {
        marker.unbindTooltip();
        marker.bindTooltip(marker.options.title, {permanent: true, direction: 'top', opacity: 1.0}).openTooltip();
    });
});

function requestUserName() {
    const userName = prompt("Por favor, digite seu nome para salvar este ponto:");
    return userName;
}

function saveMarkerDetails(marker) {
    const userName = requestUserName();
    if (userName) {
        const description = document.getElementById('descInput').value;
        const color = document.getElementById('colorPicker').value;
        changeMarkerColor(marker, color, description, userName);
    } else {
        alert("Você precisa digitar seu nome para salvar o ponto!");
    }
}

function changeMarkerColor(marker, color, description, userName) {
    marker.setIcon(new L.DivIcon({
        className: 'custom-marker',
        html: `<div class="marker-div" style="background-color: ${color}; cursor: pointer;" title="${description}"></div>`
    }));
    marker.options.color = color;
    marker.options.title = `${userName}: ${description}`;
    marker.unbindTooltip();
    marker.bindTooltip(`${userName}: ${description}`, {permanent: true, direction: 'top', opacity: 1.0}).openTooltip();
}

function removeMarker(marker) {
    map.removeLayer(marker);
}

function saveMarkerDetails(marker) {
    const userName = requestUserName();
    if (userName) {
        const description = document.getElementById('descInput').value;
        const color = document.getElementById('colorPicker').value;
        changeMarkerColor(marker, color, description, userName);

        const markerData = {
            lat: marker.getLatLng().lat,
            lng: marker.getLatLng().lng,
            color: color,
            description: description,
            userName: userName
        };

        fetch('http://localhost:3000/api/markers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(markerData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Marker saved:', data);
        })
        .catch(error => {
            console.error('Error saving marker:', error);
        });
    } else {
        alert("Você precisa digitar seu nome para salvar o ponto!");
    }
}
