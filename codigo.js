
plataCofla = prompt ("Cuanta plata tiene Cofla?");
plataPedro = prompt ("Cuanta plata tiene Pedro?");
plataRoberto = prompt ("Cuanta plata tiene Roberto?");

plataCofla = parseInt(plataCofla)

if (plataCofla >= 0.6 && plataCofla < 1) {
	alert("cofla, comprate un helado de agua");
	alert("te sobran " + (plataCofla - 0.6));
} 
else if (plataCofla >= 1 && plataCofla < 1.6) {
	alert("cofla, comprate un helado de crema");
	alert("te sobran " + (plataCofla - 1));
} 
else if (plataCofla >= 1.6 && plataCofla < 1.7) {
	alert("cofla, comprate un helado heladix");
	alert("te sobran " + (plataCofla - 1.6));
} 
else if (plataCofla >= 1.7 && plataCofla < 1.8) {
	alert("cofla, comprate un helado heladovich");
	alert("te sobran " + (plataCofla - 1.7));
} 
else if (plataCofla >= 1.8 && plataCofla < 2.9) {
	alert("cofla, comprate un helado helardo");
	alert("te sobran " + (plataCofla - 1.8));
} 
else if (plataCofla >= 2.9) {
	alert("cofla, te podes comprar 1/4kg de helado o helado confitado");
	alert("te sobran " + (plataCofla - 2.9));
} 
else {
	alert("cofla, no te da para nada pobre de mierda");
}

if (plataPedro >= 0.6 && plataPedro < 1) {
	alert("Pedro, comprate un helado de agua")
} 
else if (plataPedro >= 1 && plataPedro < 1.6) {
	alert("Pedro, comprate un helado de crema")
} 
else if (plataPedro >= 1.6 && plataPedro < 1.7) {
	alert("Pedro, comprate un helado heladix")
} 
else if (plataPedro >= 1.7 && plataPedro < 1.8) {
	alert("Pedro, comprate un helado heladovich")
} 
else if (plataPedro >= 1.8 && plataPedro < 2.9) {
	alert("Pedro, comprate un helado helardo")
} 
else if (plataPedro >= 2.9) {
	alert("Pedro, te podes comprar 1/4kg de helado o helado confitado")
} 
else {
	alert("Pedro, no te da para nada pobre de mierda")
}

if (plataRoberto >= 0.6 && plataRoberto < 1) {
	alert("Roberto,; comprate un helado de agua")
} 
else if (plataRoberto >= 1 && plataRoberto < 1.6) {
	alert("Roberto, comprate un helado de crema")
} 
else if (plataRoberto >= 1.6 && plataRoberto < 1.7) {
	alert("Roberto, comprate un helado heladix")
}
else if (plataRoberto >= 1.7 && plataRoberto < 1.8) {
	alert("Roberto, comprate un helado heladovich")
} 
else if (plataRoberto >= 1.8 && plataRoberto < 2.9) {
	alert("Roberto, comprate un helado helardo")
} 
else if (plataRoberto >= 2.9) {
	alert("Roberto, te podes comprar 1/4kg de helado o helado confitado")
} 
else {
	alert("Roberto, no te da para nada pobre de mierda")
}
