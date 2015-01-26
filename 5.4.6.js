

function sumador (operacion,resultado){
	var operation = document.getElementById(operacion);
	var res = document.getElementById(resultado);
	var operandos = operation.innerHTML.split ("+");
    var op1 = parseInt(operandos[0]);
    var op2 = parseInt(operandos[1]);
	var result = op1 + op2

	res.innerHTML = "=" + result;
}

function suma_Random (operandos) {
       var operation = document.getElementById(operandos);
       operation.innerHTML = Math.round(Math.random()*10) + "+" +Math.round(Math.random()*10)
}
