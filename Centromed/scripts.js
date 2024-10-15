let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 3000);


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es'
    });

    calendar.render();
});



// Inicializar el mapa con una ubicación específica
function initMap() {
// Coordenadas de la ubicación (por ejemplo, Ciudad de México)
var location = { lat: 19.432608, lng: -99.133209 };  // Cambia las coordenadas aquí

// Crear el mapa y centrarlo en la ubicación
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,  // Nivel de zoom ajustado
    center: location
});

// Crear un marcador en la ubicación específica
var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Ciudad de México'  // Cambia el título si es necesario
});
}

document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendarContainer');

    // Generar un calendario básico
    const generateCalendar = () => {
        let calendarHTML = '<table>';
        calendarHTML += '<thead><tr><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th><th>Dom</th></tr></thead>';
        calendarHTML += '<tbody>';

        // Generar las filas del calendario (simulación para un mes)
        for (let i = 0; i < 5; i++) {
            calendarHTML += '<tr>';
            for (let j = 0; j < 7; j++) {
                calendarHTML += `<td>${i * 7 + j + 1}</td>`;
            }
            calendarHTML += '</tr>';
        }
        calendarHTML += '</tbody></table>';
        calendarContainer.innerHTML = calendarHTML;
    };

    generateCalendar();
});