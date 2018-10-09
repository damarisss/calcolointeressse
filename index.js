/* funzioni per CRT */
function calcola(){
	/* valori del from */
	var C = document.froms.Crt.C.value;
	var r = document.froms.Crt.r.value;
	var T = document.froms.Crt.T.value;
	var U = document.froms.Crt.U.value;
	var I = document.froms.Crt.I.value;
	if(U = 0){
		document.getElementById('risultato').innerHTML="Errore";
	}
	else if(U = 1){
		var d = 36500;
	}
	else if(U = 2){
		var d = 1200;
	}
	else if(U = 3){
		var d = 100;
	}
		I = (C*r*T)/d;
			document.getElementById('risultato').innerHTML="interesse:" + I + " € " ;
		}
		function Annulla(){
			document.getElementById('risultato').innerHTML=" " ;
		}
			
