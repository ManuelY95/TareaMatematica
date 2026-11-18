let boton = document.querySelector("#generar");

boton.addEventListener("click", function() {

    let b = Math.floor(Math.random() * 21) - 10;
    let c = Math.floor(Math.random() * 21) - 10;

    document.querySelector("#valorB").textContent = "b = " + b;
    document.querySelector("#valorC").textContent = "c = " + c;

    if (c == 0) {

        document.querySelector("#propiedadesAfin").innerHTML =
        "Muestra las propiedades de la función afín.";

        document.querySelector("#propiedadesLineal").innerHTML =
        "<li>Pasa por el origen.</li>" +
        "<li>Su pendiente es " + b + ".</li>";

        if (b > 0) {
            document.querySelector("#propiedadesLineal").innerHTML +=
            "<li>Es creciente.</li>";
        }

        if (b < 0) {
            document.querySelector("#propiedadesLineal").innerHTML +=
            "<li>Es decreciente.</li>";
        }

        if (b == 0) {
            document.querySelector("#propiedadesLineal").innerHTML +=
            "<li>Es horizontal.</li>";
        }

    } else {

        document.querySelector("#propiedadesLineal").innerHTML =
        "Muestra las propiedades de la función lineal.";

        document.querySelector("#propiedadesAfin").innerHTML =
        "<li>No pasa por el origen.</li>" +
        "<li>Corta el eje Y en (0," + c + ").</li>" +
        "<li>Su pendiente es " + b + ".</li>";

        if (b > 0) {
            document.querySelector("#propiedadesAfin").innerHTML +=
            "<li>Es creciente.</li>";
        }

        if (b < 0) {
            document.querySelector("#propiedadesAfin").innerHTML +=
            "<li>Es decreciente.</li>";
        }

        if (b == 0) {
            document.querySelector("#propiedadesAfin").innerHTML +=
            "<li>Es horizontal.</li>";
        }

    }

});

let archivo = document.querySelector("#archivo");

archivo.addEventListener("change", function() {

    if (archivo.files.length > 0) {
        document.querySelector("#nombreArchivo").textContent =
        archivo.files[0].name;
    }

});