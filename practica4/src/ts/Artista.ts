import type { ArtistaData } from "./interfaces";

const form = document.getElementById('artista-form') as HTMLFormElement;
const nombreInput = document.getElementById('nombre') as HTMLInputElement;
const generoInput = document.getElementById('genero') as HTMLInputElement;
const anioInput = document.getElementById('anio') as HTMLInputElement;

const errorNombre = document.getElementById('error-nombre')!;
const errorGenero = document.getElementById('error-genero')!;
const errorAnio = document.getElementById('error-anio')!;
const contenedor = document.getElementById('artistas-container')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  errorNombre.textContent = "";
  errorGenero.textContent = "";
  errorAnio.textContent = "";

  const nombre = nombreInput.value.trim();
  const genero = generoInput.value.trim();
  const anio = Number(anioInput.value);

  let isValid = true;

  if (!nombre || nombre.length < 3) {
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
    isValid = false;
  }

  if (!genero) {
    errorGenero.textContent = "El género es obligatorio.";
    isValid = false;
  }

  if (!anio || anio < 1900 || anio > new Date().getFullYear()) {
    errorAnio.textContent = "El año es inválido.";
    isValid = false;
  }

  if (isValid) {
    const nuevo: ArtistaData = { nombre, genero, anio };
    renderArtista(nuevo);
    form.reset();
  }
});

export function renderArtista(artista: ArtistaData): void {
  const card = document.createElement("div");
  card.className = "artista-card";

  const nombre = document.createElement("h3");
  nombre.textContent = artista.nombre;

  const genero = document.createElement("p");
  genero.textContent = `Género: ${artista.genero}`;

  const anio = document.createElement("p");
  anio.textContent = `Inicio: ${artista.anio}`;
;

  card.appendChild(nombre);
  card.appendChild(genero);
  card.appendChild(anio);

  contenedor.appendChild(card);
}
