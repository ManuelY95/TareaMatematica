
/* Busca el botón y el selector de archivos del HTML */
let boton = document.querySelector("#generar");
let archivo = document.querySelector("#archivo");

/* Guarda la conexión con GeoGebra */
let geogebra = null;


/* Carga las herramientas necesarias para utilizar GeoGebra */
let applet = new GGBApplet({

    /* Indica que se utilizará la herramienta de gráficos */
    appName: "graphing",

    /* Define el tamaño del gráfico */
    width: 900,
    height: 500,

    /* Oculta las barras y menús que no necesitamos */
    showToolBar: false,
    showAlgebraInput: false,
    showMenuBar: false,

    /* Guarda la conexión cuando GeoGebra termina de cargar */
    appletOnLoad: function(api) {
        geogebra = api;
    }

}, true);


/* Espera a que la página termine de cargar */
window.addEventListener("load", function() {

    /* Coloca GeoGebra dentro del espacio indicado en el HTML */
    applet.inject("geogebra");
});


/* Genera nuevos números cuando se presiona el botón */
boton.addEventListener("click", function() {

    /* Genera números aleatorios entre -3 y 3 */
    let b = Math.floor(Math.random() * 7) - 3;
    let c = Math.floor(Math.random() * 7) - 3;

    /* Muestra los números generados en la página */
    document.querySelector("#valorB").textContent = "b = " + b;
    document.querySelector("#valorC").textContent = "c = " + c;


    /* Clasifica la función según los valores de B y C */
    if (b == 0 && c == 0) {

        /* Si ambos son cero, corresponde a la función constante nula */
        document.querySelector("#propiedadesLineal").textContent =
        "No corresponde a una función lineal.";

        document.querySelector("#propiedadesAfin").textContent =
        "No corresponde a una función afín.";

        document.querySelector("#propiedadesConstante").textContent =
        "Es una función constante nula.";

        document.querySelector("#propiedadesSinFuncion").textContent =
        "f(x) = 0. Su valor siempre es cero.";

    } else if (b == 0) {

        /* Si B es cero y C no, corresponde a una función constante */
        document.querySelector("#propiedadesLineal").textContent =
        "No corresponde a una función lineal.";

        document.querySelector("#propiedadesAfin").textContent =
        "No corresponde a una función afín.";

        document.querySelector("#propiedadesConstante").innerHTML =
        "<li>Pendiente: 0.</li>" +
        "<li>Constante: " + c + ".</li>" +
        "<li>Es horizontal.</li>";

        document.querySelector("#propiedadesSinFuncion").textContent =
        "No corresponde.";

    } else if (c == 0) {

        /* Si C es cero y B no, corresponde a una función lineal */
        document.querySelector("#propiedadesAfin").textContent =
        "No corresponde a una función afín.";

        document.querySelector("#propiedadesConstante").textContent =
        "No corresponde a una función constante.";

        document.querySelector("#propiedadesSinFuncion").textContent =
        "No corresponde.";

        /* Muestra las propiedades de la función lineal */
        document.querySelector("#propiedadesLineal").innerHTML =
        "<li>Pasa por el origen.</li>" +
        "<li>Pendiente: " + b + ".</li>" +
        "<li>Constante: " + c + ".</li>";

        /* Comprueba si la función es creciente o decreciente */
        if (b > 0) {

            document.querySelector("#propiedadesLineal").innerHTML +=
            "<li>Es creciente.</li>";

        } else {

            document.querySelector("#propiedadesLineal").innerHTML +=
            "<li>Es decreciente.</li>";
        }

    } else {

        /* Si B y C son distintos de cero, corresponde a una función afín */
        document.querySelector("#propiedadesLineal").textContent =
        "No corresponde a una función lineal.";

        document.querySelector("#propiedadesConstante").textContent =
        "No corresponde a una función constante.";

        document.querySelector("#propiedadesSinFuncion").textContent =
        "No corresponde.";

        /* Muestra las propiedades de la función afín */
        document.querySelector("#propiedadesAfin").innerHTML =
        "<li>No pasa por el origen.</li>" +
        "<li>Corta el eje Y en (0," + c + ").</li>" +
        "<li>Pendiente: " + b + ".</li>" +
        "<li>Constante: " + c + ".</li>";

        /* Comprueba si la función es creciente o decreciente */
        if (b > 0) {

            document.querySelector("#propiedadesAfin").innerHTML +=
            "<li>Es creciente.</li>";

        } else {

            document.querySelector("#propiedadesAfin").innerHTML +=
            "<li>Es decreciente.</li>";
        }

    }


    /* Actualiza el gráfico con los nuevos valores */
    if (geogebra != null) {

        /* Borra el gráfico anterior para evitar acumular funciones */
        geogebra.reset();

        /* Dibuja la función utilizando los valores generados */
        geogebra.evalCommand("f(x) = " + b + "*x + (" + c + ")");

    }

});


/* Detecta cuando el usuario selecciona un archivo */
archivo.addEventListener("change", function() {

    /* Comprueba que se haya seleccionado un archivo */
    if (archivo.files.length > 0) {

        /* Muestra el nombre del archivo seleccionado */
        document.querySelector("#nombreArchivo").textContent =
        archivo.files[0].name;

    }

});
