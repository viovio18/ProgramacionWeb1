function mostrar() {
	
	var tareaTexto = document.forms["lista"].elements[0].value;

	
	if (tareaTexto.trim() === "") {
		alert("Por favor escribe una tarea");
		return;
	}

	var nuevaTarea = document.createElement("div");

	var texto = document.createElement("p");
	texto.innerText = tareaTexto;

	var boton = document.createElement("input");
	boton.type = "button";
	boton.value = "OK";

	boton.onclick = function () {
		alert("Tarea completada");
		nuevaTarea.remove();
	};

	nuevaTarea.appendChild(texto);
	nuevaTarea.appendChild(boton);

	document.getElementById("tareas").appendChild(nuevaTarea);

	document.forms["lista"].elements[0].value = "";
}
