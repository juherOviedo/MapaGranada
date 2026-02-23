var map = L.map('map').setView([11.9299, -85.9560], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy; académico'
}).addTo(map);

function agregarPunto(lat,lng,titulo,imagen,descripcion){
    var popupContent = `
        <strong>${titulo}</strong><br>
        <img src="${imagen}" class="popup-img">
        <p>${descripcion}</p>
    `;

    L.marker([lat,lng]).addTo(map)
        .bindPopup(popupContent,{maxWidth:300});
}

/* agregar puntos de coordenadas */
agregarPunto(
    11.9310,-85.9565,
    "Catedral",
    "https://picsum.photos/400/250?random=21",
    "Principal símbolo arquitectónico de Granada."
);

agregarPunto(
    11.9280,-85.9540,
    "Parque Central",
    "https://picsum.photos/400/250?random=22",
    "Corazón histórico de la ciudad."
);

agregarPunto(
    11.9345,-85.9590,
    "Isletas",
    "https://picsum.photos/400/250?random=23",
    "Archipiélago natural formado por actividad volcánica."
);

agregarPunto(
    11.9275,-85.9580,
    "Convento San Francisco",
    "https://picsum.photos/400/250?random=24",
    "Edificación colonial histórica."
);

agregarPunto(
    11.9305,-85.9525,
    "Calle La Calzada",
    "https://picsum.photos/400/250?random=25",
    "Zona turística y gastronómica."
);