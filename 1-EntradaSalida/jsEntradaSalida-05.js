/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	


	//nombreIngresado = txtIdNombre.value;
	nombreIngresado = document.getElementById("txtIdNombre").value;
	//edadIngresada = txtIdEdad.value;
    edadIngresado = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombreIngesado + " y tiene " + edad ingresada + " años"); 


}

