let rojo = document.getElementById("rojo");
let verde = document.getElementById("verde");
let azul = document.getElementById("azul");

function cambiar(rojo, verde, azul){
document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;


}
rojo.addEventListener("input",  (e) => {
  cambiar(rojo.value, verde.value, azul.value);
  document.getElementById("valorR").textContent = rojo.value
});

verde.addEventListener("input", function () {
 cambiar(rojo.value, verde.value, azul.value);  
 document.getElementById("valorV").textContent = verde.value
});

azul.addEventListener("input", function () {
 cambiar(rojo.value, verde.value, azul.value);
   document.getElementById("valorB").textContent = azul.value
});
