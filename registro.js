function calcular() {
    var respuestasCorrectas = {
        q1: "Anna",
        q2: "Hielo",
        q3: "Sven",
        q4: "Elsa",
        q5: "Un castillo de hielo",
        q6: "Olaf",
        q7: "Hans",
        q8: "Bosque Encantado",
        q9: "Reno",
        q10: "Arendelle"
    };

    var puntaje = 0;

    for (var i = 1; i <= 10; i++) {
        var nombre = "q" + i;
        var opciones = document.getElementsByName(nombre);

        for (var j = 0; j < opciones.length; j++) {
            if (opciones[j].checked) {
                if (opciones[j].value === respuestasCorrectas[nombre]) {
                    puntaje++;
                }
                break;
            }
        }
    }

    document.getElementById("resultado").innerHTML =
        "<h3>Obtuviste " + puntaje + " de 10 respuestas correctas.</h3>";

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(function () {
        var data = google.visualization.arrayToDataTable([
            ["Tipo", "Cantidad"],
            ["Correctas", puntaje],
            ["Incorrectas", 10 - puntaje]
        ]);

        var options = {
            title: "Resultados del Quiz",
            pieHole: 0.4,
            colors: ["#6ba7d6", "#f3d1dc"]
        };

        var chart = new google.visualization.PieChart(document.getElementById("grafico"));
        chart.draw(data, options);
    });
}

async function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const resultadoTexto = document.getElementById("resultado").innerText;

    let mensaje = "";
    const match = resultadoTexto.match(/\d+/); 
    if (match) {
        const puntaje = parseInt(match[0]);
        if (puntaje === 10) {
            mensaje = "¡Perfecto! Eres fan número uno de Frozen.";
        } else if (puntaje >= 7) {
            mensaje = "¡Felicidades! Lo hiciste muy bien.";
        } else if (puntaje >= 4) {
            mensaje = "¡Buen intento! Intenta de nuevo para mejorar.";
        } else {
            mensaje = "¡Sigue practicando! Elsa y Anna creen en ti.";
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("Resultados del Quiz de Frozen", 20, 30);

        doc.setFontSize(14);
        doc.text(resultadoTexto, 20, 50);
        doc.text(mensaje, 20, 70);

        doc.save("resultado_frozen.pdf");
    } else {
        alert("Primero responde el cuestionario y presiona Enviar.");
    }
}
