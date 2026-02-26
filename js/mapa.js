var map = L.map('map').setView([11.9299, -85.9560], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function agregarPunto(lat,lng,titulo,imagen,descripcion){
    var popupContent = `
       <h3> <strong>${titulo}</strong><br></h3>
        <img src="${imagen}" class="popup-img">
        <p>${descripcion}</p>
    `;

    L.marker([lat,lng]).addTo(map)
        .bindPopup(popupContent,{
            maxWidth: 340,
            minWidth: 260,
            autoPan: true
         });

     }



/* agregar puntos de coordenadas */
agregarPunto(
    11.9319,-85.9522,
    "Convento san francisco",
    "img/convento.jpeg",
    "La fundación de dicho inmueble data de 1529 bajo el nombre de Inmaculada Concepción de María por Fray Toribio de Benavente, eclesiástico de la orden franciscana, conocido por su sencillez y pobreza; el convento fue inicialmente construido con paredes de madera y techo de paja. La Iglesia y el convento fueron incendiados tres veces, las dos primeras por invasiones piratas, siendo la más destacada la del Pirata Morgan y la última fue por el filibustero William Walker."
);

agregarPunto(
    11.9333, -85.9513,
    "Atabal Granadino",
    "img/Atabal.jpg",
    "El Atabal de Granada, una tradición folclórica-religiosa de Nicaragua, no tiene una fecha de fundación única, pero se remonta principalmente a mediados del siglo XVIII (alrededor de 1751), ligado al fervor a la Virgen del Rosario, aunque una versión anterior sugiere su origen entre 1532 y 1542 con los dominicos."
);

agregarPunto(
    11.9373, -85.9638,
    "Vigorón Granadino",
    "img/vigoron granadino.jpg",
    "El vigorón granadino se originó en 1914 en Granada, Nicaragua, creado por María Luisa Cisneros, conocida como \"La Loca\". Surgió como una alternativa de comida rápida durante los partidos de béisbol, inspirada en un tónico estimulante del apetito llamado \"Vigorón\""
);

agregarPunto(
    11.9285, -85.9603,
    "Plaza Xalteva",
    "img/Plaza xalteva.jpg",
    "El barrio indígena de Xalteva, ubicado en la zona oeste de Granada, Nicaragua, es un sitio histórico ancestral poblado por los indígenas dirianes antes de la conquista española de 1524. Conocido por su iglesia homónima del siglo XVII, que funcionó como fortaleza militar, este sector cultural es fundamental en la identidad de la ciudad."
);

agregarPunto(
    11.9291, -85.9410,
    "Lago de Nicaragua",
    "img/lago.jpg",
    "La imagen de la Inmaculada Concepción, venerada como patrona de Granada (Nicaragua), fue hallada el 7 de diciembre de 1721 en las orillas del Lago Cocibolca dentro de un cajón de madera con la inscripción \"Para la ciudad de Granada\". La tradición relata que la caja se resistía a ser alcanzada hasta que el sacerdote local se acercó."
);