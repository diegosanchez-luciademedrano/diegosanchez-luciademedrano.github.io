var watchId;    

if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(mostrarPosicion, mostrarErrores, opciones);   
} else {
    alert("Tu navegador no soporta la geolocalización, actualiza tu navegador.");
}

function mostrarPosicion(posicion) {
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;
    var precision = posicion.coords.accuracy;
    var fecha = new Date(posicion.timestamp);
    $('#posicion').empty();
    $('#posicion').append("Latitud: " + latitud + "");
    $('#posicion').append("Longitud:" + longitud + "");
    $('#posicion').append("Precisión: " + precision + " metros "); 
    $('#posicion').append("Fecha: " + fecha + "");  
}

function mostrarErrores(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Permiso denegado por el usuario'); 
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Posición no disponible');
            break; 
        case error.TIMEOUT:
            alert('Tiempo de espera agotado');
            break;
        default:
            alert('Error de Geolocalización desconocido :' + error.code);
    }
}

var opciones = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 1000
};

function detener() {
    navigator.geolocation.clearWatch(watchId);
}