

let input = document.querySelector("input")
let guardar = document.querySelector("button")

guardar.addEventListener("click", (e) => {

    localStorage.setItem("textoIngresado", input.value);
}
)