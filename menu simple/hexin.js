
			function xpand(ella) {
				obj1=eval("hh"+(ella));
				//convertir en número, sino no se suma a 3
				qina1 = document.getElementById(ella);
				if(obj1.style.display=="block") {
					obj1.style.display="none";
					qina1.src = "flecha1.gif";
				} else {
					obj1.style.display="block";
					qina1.src = "flecha.gif";
				}
			}

	

			function expand(el) {
				obj=eval("hh"+(el));
				//convertir en número, sino no se suma a 3
				qina = document.getElementById(el);
				if(obj.style.display=="block") {
					obj.style.display="none";
					qina.src = "icon.gif";
				} else {
					obj.style.display="block";
					qina.src = "line.gif";
				}
			}
	

/* la enumeración debe empezar por 1, de 3 en 3, 1100, 1100100, 1100100100.....*/
// los elementos por separado
function parra(){
	var wawa = document.createElement("p");
	return wawa;
}
function deve(){
		var xaxa = document.createElement("div");
		xaxa.setAttribute("style","background-color:white; box-shadow: 10px 10px 5px #888888;width:150px;left:0px;position:absolute;"); 
		xaxa.setAttribute("id","h1");
		return xaxa;
}
function dev(key){
		var momo = document.createElement("div");
		momo.setAttribute("style","background-color:white; box-shadow: 10px 10px 5px #888888;display:none;width:150px;left:140px;position:absolute;"); 
		momo.setAttribute("id",key);
		return momo;
}
function mage(kay){
	var rara = document.createElement("img");
	rara.src = "icon.gif";
	rara.setAttribute("height", "13");
	rara.setAttribute("align", "absmiddle");
	rara.setAttribute("onclick", "expand(this.id);");
	rara.setAttribute("id", kay);
	return rara;
}
function eti(txto){
	var caca = document.createElement("label");
	var cece = document.createTextNode("("+txto+")"+"\n");
	caca.appendChild(cece);
	return caca;
}
function linke(txt){
		var mumu = document.createElement("a");
		var linka = document.createTextNode(txt);
		mumu.appendChild(linka);
		mumu.href = "#";	
		return mumu;
}
//para las definiciones rosas
function mage1(kiy){
	var waka = document.createElement("img");
	waka.src = "flecha1.gif";
	waka.setAttribute("height", "13");
	waka.setAttribute("align", "absmiddle");
	waka.setAttribute("onclick", "xpand(this.id);");
	waka.setAttribute("id", kiy);
	return waka;
}
function eti1(txta, ky){
	var wake = document.createElement("label");
	var waki = document.createTextNode(txta);
	wake.appendChild(waki);
	wake.setAttribute("id", ky);
	wake.setAttribute("style", "background-color:pink;display:none;border-radius:50px;width:550px;left:180px; position:absolute;font-weight: bold;");
	return wake;
}

/*CONSTRUCCIONES MÁS COMPLEJAS*/

//CABECERA DE INICIO
function cabecera(){
	var sisi = deve();
	sisi.appendChild(mage(1));
	sisi.appendChild(eti(1));
	sisi.appendChild(linke("INICIO"));
	sisi.appendChild(dev("hh1"));
	return sisi;
}
//YA ESTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA 
//ahora  llamo la tapa inicial
//le añado una capa, y dentro de él lo llamo con getElementByID para añadir líneas
function initia(){
	var ejem1 = cabecera();
	document.body.appendChild(ejem1);
	return ejem1;
}
// LA QUE NO TIENE DIV
//le vas añadiendo las líneas que quieras
//	<tr><td height="18"><a href="#">aaaa</a></td></tr>
//	<tr><td height="18"><a href="#">bbbb</a></td></tr>
//	<tr><td height="18"><a href="#">cccc</a></td></tr>
function repe(txt,key){
	var jaja = parra();
	jaja.appendChild(mage(key));
	jaja.appendChild(eti(key));
	jaja.appendChild(linke(txt));
	return jaja;
}
// LA QUE TIENE DIV
//<tr><td><div id="h12" style="padding-left:15px">
			//<table id="100100100100" width="100%" border="1" cellspacing="0" cellpadding="0"></table>
//</div></tr></td>
function repe2(hkey){
	return dev(hkey);
}




		
		// del valor que introduzca, obtener 1,4,7,10,13
		function obtener(valor){
			var gaga = valor + "";
			var arr = new Array("1");
			var longe = gaga.length;
			var lon = parseInt((longe-arr[0]))/3;
			//las vueltas que tiene que dar según la longitud del número introducido partido por 3
			for(i=0; i<lon; i++){
				arr.push(parseInt(arr[i])+3);
				// 1+3; 4+3; 7+3......
			}
			return arr;
		}
		// del arr anterior, obtener los valores fragmentados de 1101, 1101105, 1101105102
		function obtener2(valor){
			var valor = valor +"";
			var busc = valor.indexOf("a");
			var arr2 = new Array();
			//busco a ver si hay "a" en el número
			//si hay pues divido el número en 2 secciones (1101, a)

			if(busc > 0){

				arr2[0] = valor.slice(0, busc);// de 0 hasta el penúltimo
				arr2[1] = "a";

			//de lo contrario sigue la rutina normal de fragmentación 1101, 1101105.....			
			}else{
				var arr1 = obtener(valor);
				var log = arr1.length;
				for(h=0;h<log;h++){
					arr2.push(valor.slice(0, arr1[h]));
				}				
			}

			return arr2;
			//alert(arr2);
		}
		


function menu(valor,txt){
		var ma = obtener2(valor);
		var loe = ma.length;
		//si el número es 1101a, entonces que busque 1101, y añada dentro una imagen y un label, con códigos, 1101a, hh1101a, respectivamente 
		//de lo contrario siga la rutina normal
		if(ma[1] == "a"){
				var boaboa = document.getElementById(ma[0]);
				var boeboe = boaboa.parentNode;
				boeboe.appendChild(mage1(valor));
				boeboe.appendChild(eti1(txt, "hh"+valor));
		}else{
				for(k=0;k<loe;k++){
					//recorra todo 
					var shuma = ma[k];
					var hshuma = "hh" + shuma;
					if(document.getElementById(hshuma)){
						
					}else{
						//añadir estructura repetitiva
						var pand = document.getElementById("hh" + (ma[k-1]));
						pand.appendChild(repe(txt,shuma));
						var line = repe2(hshuma);
						pand.appendChild(line);
					}
				}			
		}

		
}




//ordenar los números y textos en el orden correspondiente

	//embalar
	function matriz(va, ve, m, n){
		var lala = new Array();
			for(i=0;i<va.length;i++){
				var arr = new Array();
				//creas array de 1 nivel donde solo hay 2 elementos
				arr[0] = va[i];
				arr[1] = ve[i];
				//lo agrupas todo en lala
				lala.push(arr);
			}
		//ordena el array de 2 dimensiones
		var lele = lala.sort();
		//alert(lele);
		var lili = lele[m]; //position de 2 dimensión
		return lili[n]; //qué elemento de la 1º dimensión
	}






