/* const tema = confirm("desea aplicar el tema oscuro?");

if (tema) {
  document.querySelector("body").classList.add("dark");
} */

const btn = document.querySelector(".btn");
const body = document.querySelector("body");

function darkMode() {
  if (body.classList.contains("dark")) {
    btn.innerHTML = "Desactivar Modo Oscuro";
  } else {
    btn.innerHTML = "Activar Modo Oscuro";
  }
  body.classList.toggle("dark");
}
