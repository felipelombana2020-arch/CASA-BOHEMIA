// SELECCIÓN DE ELEMENTOS PARA ANIMACIÓN PARALLAX
const mountainone = document.querySelector("#mountainblue_01");
const mountaintwo = document.querySelector("#mountainred_02");
const plants = document.querySelector("#plants");
const arboluno = document.querySelector("#treesdown_01");
const arboldos = document.querySelector("#treesup_02");
const hombre = document.querySelector("#man_01");
const titulo = document.querySelector("#titulo");

// EVENTO DE DESPLAZAMIENTO (SCROLL)
window.addEventListener("scroll", () => { 
  let scroll = window.scrollY;

  // Movimiento horizontal y vertical suavizado para cada capa visual
  if (mountainone) mountainone.style.left = scroll * 0.4 + "px";
  if (mountaintwo) mountaintwo.style.left = scroll * 0.2 + "px";

  if (arboldos) {
    arboldos.style.bottom = (scroll * -0.5) + "px";
    arboldos.style.right = (scroll * 0.8) + "px";
  }

  if (arboluno) arboluno.style.right = (scroll * 0.6) + "px";
  if (hombre) hombre.style.right = (scroll * 0.4) + "px";
  if (plants) plants.style.right = (scroll * 0.5) + "px";
  
  // Desplazamiento y difuminado progresivo del titular principal
  if (titulo) {
    titulo.style.transform = `translateY(${scroll * 0.4}px)`;
    titulo.style.opacity = 1 - (scroll / 600);
  }
});