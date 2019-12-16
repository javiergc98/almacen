function actualizar(){
    var botones = document.getElementsByName("operacion");
    var cantidad = botones.length;
	var operacion;

	for (var i = 0; i < cantidad; i++) {
		if (botones[i].checked) {
			operacion = botones[i].value;
			break;
		}
    }
    
    var numero = (document.getElementById("numero").value);
    var mensaje;

	if (operacion === "entrada") {
		mensaje = "Se han ingresado " + numero + " unidades del producto.";
	}
	else {
		mensaje = "Se han retirado " + numero + " unidades del producto.";
	}

    document.getElementById("mensaje").value = mensaje;
}