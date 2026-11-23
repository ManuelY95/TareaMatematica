
let boton = document.querySelector("#generar");
let archivo = document.querySelector("#archivo");

let geogebra = null;

// Cargar GeoGebra
let applet = new GGBApplet({
    appName: "graphing",
    width: 900,
    height: 500,
    showToolBar: false,
    showAlgebraInput: false,
    showMenuBar: false,

    appletOnLoad: function(api) {
        geogebra = api;
    }

}, true);

window.addEventListener("load", function() {
    applet.inject("geogebra");
});


// Generar los numeros
boton.addEventListener("click", function() {

    let b = Math.floor(Math.random() * 21) - 10;
    let c = Math.floor(Math.random() * 21) - 10;

    document.querySelector("#valorB").textContent = "b = " + b;
    document.querySelector("#valorC").textContent = "c = " + c;

    // Clasificar la funcion
    if (b == 0 && c == 0) {

        document.querySelector("#propiedadesLineal").textContent =
        "No corresponde a una funcion lineal.";

        document.querySelector("#propiedadesAfin").textContent =
        "No corresponde a una funcion afin.";

    } else if (c == 0) {

        document.querySelector("#propiedadesAfin").textContent =
        "No corresponde a una funcion afin.";

        document.querySelector("#propiedadesLineal").innerHTML =
        "<li>Pasa por el origen.</li>" +
        "<li>Su pendiente es " + b + ".</li>";

        if (b > 0) {
            document.querySelector("#propiedadesLineal").innerHTML +=
            "<li>Es creciente.</li>";
        } else {
            document.querySelector("#propiedadesLineal").innerHTML +=
            "<li>Es decreciente.</li>";
        }

    } else {

        document.querySelector("#propiedadesLineal").textContent =
        "No corresponde a una funcion lineal.";

        document.querySelector("#propiedadesAfin").innerHTML =
        "<li>No pasa por el origen.</li>" +
        "<li>Corta el eje Y en (0," + c + ").</li>" +
        "<li>Su pendiente es " + b + ".</li>";

        if (b > 0) {
            document.querySelector("#propiedadesAfin").innerHTML +=
            "<li>Es creciente.</li>";
        } else if (b < 0) {
            document.querySelector("#propiedadesAfin").innerHTML +=
            "<li>Es decreciente.</li>";
        } else {
            document.querySelector("#propiedadesAfin").innerHTML +=
            "<li>Es horizontal.</li>";
        }

    }

    // Actualizar el grafico
    if (geogebra != null) {

        geogebra.reset();

        if (b != 0 || c != 0) {
            geogebra.evalCommand("f(x) = " + b + "*x + (" + c + ")");
        }

    }

});


// Mostrar nombre del archivo
archivo.addEventListener("change", function() {

    if (archivo.files.length > 0) {

        document.querySelector("#nombreArchivo").textContent =
        archivo.files[0].name;

    }

});
