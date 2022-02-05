/* 
Lopez Noemi DIV I
E/S 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreingresado;

nombreingresado = prompt("ingrese el nombre de su tatara abuelo");
document.getElementById("txtIdNombre").value = nombreingresado;

}

