import type { EventoData } from "./interfaces";

const contenedor = document.getElementById("eventos-container")!;

export function renderEvento(evento: EventoData): void {
  const div = document.createElement("div");
  div.className = "evento-card";

  div.innerHTML = `
    <h3>${evento.titulo}</h3>
    <p>Fecha: ${evento.fecha}</p>
    <p>Lugar: ${evento.lugar}</p>
    <button>Eliminar</button>
  `;

  const btn = div.querySelector("button")!;
  btn.addEventListener("click", () => div.remove());

  contenedor.appendChild(div);
}
