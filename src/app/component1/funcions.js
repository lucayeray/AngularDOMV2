import {style} from "@angular/animations";

export function yellowSubmarine(){
  let text = document.getElementById("groc")
  text = text.style.color="yellow"
}
export function changeSize(){
  let taulatamany = document.getElementById("taula")
  taulatamany = taulatamany.width="500px"
}

export function countWords() {
  let textContador= document.getElementById("textContador").innerText
  const paraules = textContador.split(/\s+/).filter(word => word.length > 0);
  let numeroFinal = document.getElementById('numeroPraules')
  numeroFinal.innerHTML="Numero de paraules: "+ paraules.length
}

export function mostrarValores() {
  var lista = document.getElementById("listaDesplegable");
  var divValores = document.getElementById("valoresSeleccionados");

  divValores.innerHTML = "";

  for (var i = 0; i < lista.options.length; i++) {
    if (lista.options[i].selected) {
      divValores.innerHTML += lista.options[i].value + "<br>";
    }
  }
}
