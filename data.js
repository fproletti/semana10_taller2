document.addEventListener("DOMContentLoaded", (e) => {

   let  mostrarAca = document.getElementById("data");
 
   mostrarAca.innerText = localStorage.getItem("textoIngresado"); 
  console.log(localStorage.getItem("textoIngresado"));
 
}
)