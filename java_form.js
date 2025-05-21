function leer(){

//Referencia por pseudoclase
var nom=document.forms["formulario"].elements[0].value;

//Referencia por id
var clave=document.getElementById("pass").value;
document.getElementById("resultado").innerHTML="Tu nombre es: " +nom+ "\<br> Tu contraseña es: " +clave+ "\<br> Eres de la carrera de: " +carrera1+ "\<br> Tu género es: " +gend;

//Referencia por etiqueta
var carrera1=document.getElementsByTagName("select")[0].value;

//Referencia por name
var gend=document.getElementsByName("genero");

alert(carrera1);

}